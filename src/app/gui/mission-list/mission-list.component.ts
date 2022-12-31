import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DB_Icons, DB_MissionTasks } from '../../../defs/cdclient';
import { Locale_Missions } from '../../../defs/locale';
import { mapRec, mapToDict, mapToMultiDict, pick, recToSet, values } from '../../../defs/rx';
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

class Mission {
  constructor(
    public id: number,
    public $table: Observable<DB_Missions_Ref | undefined>,
    public $missionIcon: Observable<DB_Icons | undefined>,
    public $loc: Observable<Locale_Missions>,
  ) { }

  get $sortOrder(): Observable<number> {
    return this.$table.pipe(map(m => m ? -m.isMission * 10000 + m.UISortOrder : 0))
  }
}

@Component({
  selector: 'lux-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  @Input()
  set ids(value: number[]) {
    this.$missionIds.next(value);
  }

  $missionIds = new ReplaySubject<number[]>();
  $missions: Observable<Mission[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const cd = this.luCoreData;
    let $missionsTable = this.$missionIds.pipe(
      cd.queryTableEntries$<number[], DB_Missions_Ref>('Missions', MISSION_KEYS),
      mapToDict("id"),
      shareReplay(1)
    );
    let $missionsLocale = this.$missionIds.pipe(
      cd.queryLocaleNum$("Missions", ["name"]),
      shareReplay(1),
    );
    let $missionIcons = $missionsTable.pipe(
      values(),
      map(data => Array.from(data, d => d.missionIconID).filter(v => v)),
      cd.icons(),
      shareReplay(1)
    );
    let $missionTasks: Observable<Record<number, DB_MissionTasks_Ref[]>> = this.$missionIds.pipe(
      cd.queryTableEntries$<number[], DB_MissionTasks_Ref>('MissionTasks', MISSION_TASKS_KEYS),
      mapToMultiDict("id"),
      shareReplay(1),
    );
    let $firstMissionTasks = $missionTasks.pipe(mapRec(v => v[0]), shareReplay(1));
    let $firstMissionTasksIcons = $firstMissionTasks.pipe(
      recToSet(a => a.largeTaskIconID),
      map(s => Array.from(s.values())),
      cd.icons(),
      shareReplay(1),
    );
    function iconForMission(m: DB_Missions_Ref): Observable<DB_Icons> {
      if (m && m.missionIconID && !m.isMission) {
        // Achievement
        return $missionIcons.pipe(map(i => i[m.missionIconID]));
      } else if (m && m.isMission) {
        // Mission
        return $firstMissionTasks.pipe(
          pick(m.id),
          switchMap(task => $firstMissionTasksIcons.pipe(pick(task.largeTaskIconID)))
        );
      } else {
        return of(null);
      }
    }
    this.$missions = this.$missionIds.pipe(
      map(data => Array.from(data, id => {
        let $table = $missionsTable.pipe(pick(id), shareReplay(1));
        let $missionIcon = $table.pipe(switchMap(iconForMission));
        let $loc = $missionsLocale.pipe(pick(id), shareReplay(1));
        return new Mission(id, $table, $missionIcon, $loc);
      }))
    );
  }

  /*
  sortOrderOf(mission?: DB_Missions_Ref): number | null {
    if (!mission) return null;
    return
  }

  iconIdOf(mission?: DB_Missions_Ref): number | null {
    if (!mission || mission.isMission) return null;
    return mission.missionIconID;
  }
  */
}
