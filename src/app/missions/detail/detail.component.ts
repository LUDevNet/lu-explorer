import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DB_Missions, DB_MissionText } from '../../../defs/cdclient';
import { MissionTasks } from '../../../defs/util';
import { MissionFragment, MissionDetailGQL, MissionDetailQuery } from "generated/graphql";

import { LuCoreDataService } from '../../services';

const CHAT_BUBBLE_KEYS: string[] = [
  "chat_state_1_loc",
  "accept_chat_bubble_loc",
  "chat_state_2_loc",
  "chat_state_3_loc",
  "chat_state_3_turnin_loc",
  "chat_state_4_loc",
  "chat_state_4_turnin_loc",
];

interface Mission {
  $text: Observable<DB_MissionText>,
}

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  $gqlQuery: Observable<MissionDetailQuery>;
  $mission: Observable<DB_Missions | null>;
  $tasks: Observable<MissionTasks[]>;
  $id: Observable<number>;

  $data: Observable<Mission>;

  taskDetailsOpen = false;
  missionDetailsOpen = false;
  missionTextDetailsOpen = false;

  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService,
    private gql: MissionDetailGQL,
  ) { }

  ngOnInit() {
    this.$id = this.route.paramMap.pipe(map(params => +params.get('id')));
    this.$gqlQuery = this.$id.pipe(switchMap(id => this.gql.watch({id: id}).valueChanges));
    this.$mission = this.$id.pipe(switchMap(id => this.coreData.getSingleTableEntry("Missions", id)), shareReplay(1));
    this.$tasks = this.$id.pipe(switchMap(id => this.coreData.getTableEntry("MissionTasks", id)));
    this.$data = this.$id.pipe(map(id => {
      return {
        $text: this.coreData.getSingleTableEntry("MissionText", id),
      }
    }), shareReplay(1));
  }

  mapMissions(missions: any) : MissionFragment[] {
    return missions.map(x => x.mission);
  }

  anyChatBubble(texts: any): boolean {
    for (const key of CHAT_BUBBLE_KEYS) {
      if (texts[key]) {
        return true;
      }
    }
    return false;
  }
}
