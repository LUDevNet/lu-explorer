import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, ObservableInput } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Icons, DB_Missions } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';

interface DB_Missions_Ref {
  id: number;
  isMission: boolean;
  UISortOrder?: number;
  missionIconID?: number;
}

const MISSION_KEYS: string[] = [
  "id",
  "isMission",
  "UISortOrder",
  "missionIconID",
];

interface DB_ItemSets_Ref {
  setID: number;
  kitImage?: number
}

const ITEM_SET_KEYS: string[] = [
  "setID",
  "kitImage",
];

const ICONS_KEYS: string[] = [
  "IconID",
  "IconPath",
  "IconName",
]

interface Locale_ItemSet {
  kitName?: string,
}

type Map_Locale_ItemSet = Record<number, Locale_ItemSet>;

function missionsDict(list: DB_Missions_Ref[]): Record<number, DB_Missions_Ref> {
  let obj: Record<number, DB_Missions_Ref> = Object.create({});
  for (const mission of list) {
    obj[mission.id] = mission;
  }
  return obj
}

function itemSetsDict(list: DB_ItemSets_Ref[]): Record<number, DB_ItemSets_Ref> {
  let obj: Record<number, DB_ItemSets_Ref> = Object.create({});
  for (const mission of list) {
    obj[mission.setID] = mission;
  }
  return obj
}

function iconsDict(list: DB_Icons[]): Record<number, DB_Icons> {
  let obj: Record<number, DB_Icons> = Object.create({});
  if (!Array.isArray(list)) {
    console.warn("iconsDict", list);
    return {};
  }
  for (const mission of list) {
    obj[mission.IconID] = mission;
  }
  return obj
}

interface ItemSet {
  id: number,
  $table: Observable<DB_ItemSets_Ref | undefined>,
  $icon: Observable<DB_Icons | undefined>,
  $loc: Observable<Locale_ItemSet | undefined>
}

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;
  $data: Observable<Rev_GateVersion | null>;

  $missions: Observable<Record<number, DB_Missions_Ref>>
  $itemSets: Observable<ItemSet[]>;
  //$itemSets: Observable<Record<number, DB_ItemSets_Ref>>
  //$itemSetIcons: Observable<Record<number, DB_Icons>>
  //$itemSetsLocale: Observable<Map_Locale_ItemSet>;

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));
    this.$missions = this.$data.pipe(
      switchMap(data => this.luCoreData.queryTableEntries<DB_Missions_Ref>('Missions', data.missions, MISSION_KEYS)),
      map(missionsDict)
    )
    let $itemSetsTable = this.$data.pipe(
      switchMap(data => this.luCoreData.queryTableEntries<DB_ItemSets_Ref>('ItemSets', data.item_sets, ITEM_SET_KEYS)),
      map(itemSetsDict),
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
      switchMap(data => this.luCoreData.queryTableEntries<DB_Icons>('Icons', data, ICONS_KEYS)),
      map(iconsDict),
      shareReplay(1),
    );
    this.$itemSets = this.$data.pipe(
      map(data => data.item_sets),
      map(data => Array.from(data, id => {
        let $table = $itemSetsTable.pipe(map(x => x[id]));
        return {
          id,
          $table,
          $icon: $table.pipe(switchMap(t => $itemSetIcons.pipe(map(arr => arr[t.kitImage])))),
          $loc: $itemSetsLocale.pipe(map(l => l[id])),
        };
      }))
    )
  }

  sortOrderOf(mission?: DB_Missions_Ref): number | null {
    if (!mission) return null;
    return -mission.isMission * 10000 + mission.UISortOrder
  }

  iconIdOf(mission?: DB_Missions_Ref): number | null {
    if (!mission || mission.isMission) return null;
    return mission.missionIconID;
  }
}
