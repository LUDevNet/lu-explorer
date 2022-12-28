import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Missions } from '../../../defs/cdclient';
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

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;
  $data: Observable<Rev_GateVersion | null>;

  $missions: Observable<Record<number, DB_Missions_Ref>>

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));
    this.$missions = this.$data.pipe(
      switchMap(data => this.luCoreData.queryTableEntries<DB_Missions_Ref>('Missions', data.missions, MISSION_KEYS)),
      map(list => {
        let obj: Record<number, DB_Missions_Ref> = Object.create({});
        for (const mission of list) {
          obj[mission.id] = mission;
        }
        return obj
      })
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
