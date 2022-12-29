import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, OperatorFunction } from 'rxjs';
import { first, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Icons, DB_MissionTasks } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';

interface DB_Missions_Ref {
  id: number;
  isMission: boolean;
  UISortOrder?: number;
  missionIconID?: number;
}

const MISSION_KEYS: (keyof DB_Missions_Ref)[] = [
  "id",
  "isMission",
  "UISortOrder",
  "missionIconID",
];

interface DB_MissionTasks_Ref {
  id: number
  uid: number,
  largeTaskIconID: number,
}

const MISSION_TASKS_KEYS: (keyof DB_MissionTasks_Ref & keyof DB_MissionTasks)[] = [
  "id",
  "uid",
  "largeTaskIconID",
];

interface DB_ItemSets_Ref {
  setID: number;
  kitImage?: number
}

const ITEM_SET_KEYS: (keyof DB_ItemSets_Ref)[] = [
  "setID",
  "kitImage",
];

const ICONS_KEYS: (keyof DB_Icons)[] = [
  "IconID",
  "IconPath",
  "IconName",
]

interface Locale_ItemSet {
  kitName?: string,
}

type Map_Locale_ItemSet = Record<number, Locale_ItemSet>;

function toDict<T, K extends keyof T, V extends T[K] & number | string>(list: T[], key: K): Record<V, T> {
  let obj: Record<V, T> = Object.create({});
  for (const elem of list) {
    obj[elem[key] as V] = elem;
  }
  return obj;
}

function toMultiDict<T, K extends keyof T, V extends T[K] & number | string>(list: T[], key: K): Record<V, T[]> {
  let obj: Record<V, T[]> = Object.create({});
  for (const elem of list) {
    const k = elem[key] as V;
    if (!(k in obj)) obj[k] = [];
    obj[k].push(elem);
  }
  return obj;
}

function mapToDict<T, K extends keyof T, V extends T[K] & (number | string)>(key: K): OperatorFunction<T[], Record<V, T>> {
  return map(list => toDict(list, key))
}

function mapToMultiDict<T, K extends keyof T, V extends T[K] & (number | string)>(key: K): OperatorFunction<T[], Record<V, T[]>> {
  return map(list => toMultiDict(list, key))
}

class ItemSet {
  constructor(
    public id: number,
    public $table: Observable<DB_ItemSets_Ref | undefined>,
    public $icon: Observable<DB_Icons | undefined>,
    public $loc: Observable<Locale_ItemSet | undefined>
  ) { }
}

class Mission {
  constructor(
    public id: number,
    public $table: Observable<DB_Missions_Ref | undefined>,
    public $missionIcon: Observable<DB_Icons | undefined>,
  ) { }

  get $sortOrder(): Observable<number> {
    return this.$table.pipe(map(m => m ? -m.isMission * 10000 + m.UISortOrder : 0))
  }
}

/// Utility function
function pick<K extends string | number | symbol, T>(id: K): OperatorFunction<Record<K, T>, T | undefined> {
  return map(x => x[id])
}

function values<K extends string | number | symbol, T>(): OperatorFunction<Record<K, T>, T[]> {
  return map(Object.values)
}

function valueSet<K extends string | number | symbol, T>(): OperatorFunction<Record<K, T>, Set<T>> {
  return map(data => {
    let set = new Set<T>();
    for (const v of Object.values<T>(data)) {
      if (v) set.add(v);
    }
    return set;
  })
}

function mapArr<T, V>(f: (v: T) => V): OperatorFunction<T[], V[]> {
  return map(data => Array.from(data, f).filter(v => v));
}

type RecordKey = number | string | symbol;
function mapRec<K extends RecordKey, T, V>(f: (v: T) => V): OperatorFunction<Record<K, T>, Record<K, V>> {
  function mapper(src: Record<K, T>): Record<K, V> {
    let dict = Object.create({})
    for (const [key, value] of Object.entries(src)) {
      dict[key] = f(value as T);
    }
    return dict;
  }
  return map(mapper);
}

function recToSet<K extends RecordKey, T, V>(f: (v: T) => V): OperatorFunction<Record<K, T>, Set<V>> {
  function mapper(src: Record<K, T>): Set<V> {
    let set = new Set<V>();
    for (const val of Object.values(src)) {
      const v = f(val as T)
      if(v) set.add(v);
    }
    return set;
  }
  return map(mapper);
}

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;

  $data: Observable<Rev_GateVersion | null>;
  $missions: Observable<Mission[]>;
  $itemSets: Observable<ItemSet[]>;

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  queryTableEntries<K extends (string[] | number[]), T>(table: string, columns: (keyof T)[]): OperatorFunction<K, T[]> {
    let cd = this.luCoreData;
    function op(source: Observable<K>): Observable<T[]> {
      return switchMap((data: K) => cd.queryTableEntries<T>(table, data, columns))(source)
    }
    return op;
  }

  icons(): OperatorFunction<number[], Record<number, DB_Icons>> {
    let queryIcons = this.queryTableEntries<number[], DB_Icons>('Icons', ICONS_KEYS);
    function iconsOp(source: Observable<number[]>): Observable<Record<number, DB_Icons>> {
      return source.pipe(queryIcons, mapToDict("IconID"));
    }
    return iconsOp;
  }

  ngOnInit(): void {
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));
    let $missionIds = this.$data.pipe(map(d => d.missions));
    let $missionsTable = $missionIds.pipe(
      this.queryTableEntries<number[], DB_Missions_Ref>('Missions', MISSION_KEYS),
      mapToDict("id"),
      shareReplay(1)
    );
    let $missionIcons = $missionsTable.pipe(
      values(),
      map(data => Array.from(data, d => d.missionIconID).filter(v => v)),
      this.icons(),
      shareReplay(1)
    );
    let $missionTasks: Observable<Record<number, DB_MissionTasks_Ref[]>> = $missionIds.pipe(
      this.queryTableEntries<number[], DB_MissionTasks_Ref>('MissionTasks', MISSION_TASKS_KEYS),
      mapToMultiDict("id"),
      shareReplay(1),
    );
    let $firstMissionTasks = $missionTasks.pipe(mapRec(v => v[0]), shareReplay(1));
    let $firstMissionTasksIcons = $firstMissionTasks.pipe(
      recToSet(a => a.largeTaskIconID),
      map(s => Array.from(s.values())),
      this.icons(),
      shareReplay(1),
    );
    function iconForMission(m: DB_Missions_Ref): Observable<DB_Icons> {
      // Achievement
      if (m && m.missionIconID && !m.isMission) {
        return $missionIcons.pipe(map(i => i[m.missionIconID]));
      } else if (m && m.isMission) {
        return $firstMissionTasks.pipe(
          pick(m.id),
          switchMap(task => $firstMissionTasksIcons.pipe(pick(task.largeTaskIconID)))
        );
      } else {
        return of(null);
      }
    }
    this.$missions = this.$data.pipe(
      map(data => data.missions),
      map(data => Array.from(data, id => {
        let $table = $missionsTable.pipe(pick(id), shareReplay(1));
        let $missionIcon = $table.pipe(switchMap(iconForMission));
        return new Mission(id, $table, $missionIcon);
      }))
    );

    let $itemSetsTable = this.$data.pipe(
      map(d => d.item_sets),
      this.queryTableEntries<number[], DB_ItemSets_Ref>('ItemSets', ITEM_SET_KEYS),
      mapToDict("setID"),
      shareReplay(1)
    )
    let $itemSetsLocale = this.$data.pipe(
      switchMap(data => {
        return this.luCoreData.queryLocale<Map_Locale_ItemSet>("ItemSets", data.item_sets, ["kitName"]);
      }),
      shareReplay(1),
    );
    let $itemSetIcons = $itemSetsTable.pipe(
      map(Object.values),
      map((data: DB_ItemSets_Ref[]) => Array.from(data, d => d.kitImage).filter(v => v)),
      this.icons(),
      shareReplay(1),
    );
    this.$itemSets = this.$data.pipe(
      map(data => data.item_sets),
      map(data => Array.from(data, id => {
        let $table = $itemSetsTable.pipe(pick(id), shareReplay(1));
        let $icon = $table.pipe(switchMap(t => $itemSetIcons.pipe(pick(t.kitImage))));
        let $loc = $itemSetsLocale.pipe(pick(id));
        return new ItemSet(id, $table, $icon, $loc);
      }))
    )
  }

  sortOrderOf(mission?: DB_Missions_Ref): number | null {
    if (!mission) return null;
    return
  }

  iconIdOf(mission?: DB_Missions_Ref): number | null {
    if (!mission || mission.isMission) return null;
    return mission.missionIconID;
  }
}
