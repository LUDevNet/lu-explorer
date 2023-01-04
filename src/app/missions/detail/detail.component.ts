import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_MissionById } from '../../../defs/api';
import { DB_Missions, DB_MissionText } from '../../../defs/cdclient';
import { Locale_Missions, Locale_MissionTasks, Locale_MissionText } from '../../../defs/locale';
import { MissionTasks } from '../../../defs/util';

import { LuCoreDataService } from '../../services';

const CHAT_BUBBLE_KEYS: string[] = [
  "chat_state_1",
  "accept_chat_bubble",
  "chat_state_2",
  "chat_state_3",
  "chat_state_3_turnin",
  "chat_state_4",
  "chat_state_4_turnin",
];

interface LocaleAll_MissionText {
  description?: string,
  accept_chat_bubble?: string;
  chat_state?: Record<number, string>;
  completion_succeed_tip?: string;
  in_progress?: string;
  offer?: { $value: string, repeatable: string } | string;
  offer_repeatable?: string,
  ready_to_complete?: string;
}

interface Mission {
  $text: Observable<DB_MissionText>,
  $textLocale: Observable<LocaleAll_MissionText>
  $missionLocale: Observable<Locale_Missions>,
}

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  $mission: Observable<DB_Missions | null>;
  $rev: Observable<Rev_MissionById>;
  $tasks: Observable<MissionTasks[]>;
  id: number;

  $data: Observable<Mission>;


  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService,
  ) { }

  ngOnInit() {
    let $id = this.route.paramMap.pipe(map(params => +params.get('id')));
    this.$mission = $id.pipe(switchMap(id => this.coreData.getSingleTableEntry("Missions", id)), shareReplay(1));
    this.$tasks = $id.pipe(
      switchMap(id => this.coreData.getTableEntry("MissionTasks", id)),
      map(tasks => tasks.map(task => Object.assign(task, { $localizations: this.coreData.getLocaleSubtree(`MissionTasks_${task.uid}`) })))
    );
    this.$rev = $id.pipe(switchMap(id => this.coreData.getRevEntry<Rev_MissionById>("missions", id)));
    this.$data = $id.pipe(map(id => {
      return {
        $text: this.coreData.getSingleTableEntry("MissionText", id),
        $textLocale: this.coreData.getLocaleSubtree("MissionText", id),
        $missionLocale: this.coreData.getLocaleSubtree("Missions", id),
      }
    }), shareReplay(1));
  }

  anyChatBubble(texts: any): boolean {
    return texts.hasOwnProperty('chat_state') || texts.hasOwnProperty('accept_chat_bubble');
  }

  getChatState(texts: any, id: number): string | null {
    let prop: string | object = texts['chat_state'][id]
    if (prop) {
      return prop.hasOwnProperty('$value') ? prop['$value'] : prop;
    }
    return null;
  }

  getChatSubState(texts: any, id: number, key: string): string | null {
    let prop: string | object = texts['chat_state'][id]
    return prop ? prop[key] : undefined;
  }

  offerRepeatable(loc: LocaleAll_MissionText): string | null {
    if (!loc) return null;
    let offer = loc.offer;
    return ((typeof offer == 'string') ? null : offer.repeatable) || loc.offer_repeatable;
  }

  offerText(loc: LocaleAll_MissionText): string | null {
    if (!loc) return null;
    let offer = loc.offer;
    return (typeof offer == 'string') ? offer : offer?.$value;
  }
}
