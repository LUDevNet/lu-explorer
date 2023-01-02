import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rev_MissionById } from '../../../defs/api';
import { DB_Missions, DB_MissionTasks } from '../../../defs/cdclient';
import { MissionTasks } from '../../../defs/util';

import { LuCoreDataService, LuJsonService, LuLocaleService } from '../../services';

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

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit, OnDestroy {

  $mission: Observable<DB_Missions | null>;
  $rev: Observable<Rev_MissionById>;
  missionLocale: any;
  $tasks: Observable<MissionTasks[]>;
  tasksLocale: any;
  text: any;
  textsLocale: LocaleAll_MissionText;
  id: number;

  id_subscription: Subscription;
  mission_subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private luCoreData: LuCoreDataService,
    private luJsonService: LuJsonService,
    private luLuLocaleService: LuLocaleService,
  ) { }

  ngOnInit() {
    let $id = this.route.paramMap.pipe(map(params => +params.get('id')));
    this.$mission = $id.pipe(switchMap(id => this.luCoreData.getSingleTableEntry<DB_Missions>("Missions", id)));
    this.$tasks = $id.pipe(
      switchMap(id => this.luCoreData.getTableEntry<DB_MissionTasks>("MissionTasks", id)),
      map(tasks => tasks.map(task => Object.assign(task, { $localizations: this.luCoreData.getLocaleSubtree(`MissionTasks_${task.uid}`) })))
    );
    this.$rev = $id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_MissionById>("missions", id)));
    this.id_subscription = $id.subscribe(this.getMission.bind(this));
  }

  ngOnDestroy(): void {
    this.id_subscription.unsubscribe();
    this.clearMissionSubscription();
  }

  clearMissionSubscription() {
    if (this.mission_subscription) {
      this.mission_subscription.unsubscribe();
    }
  }

  getMission(id: number): void {
    this.id = id;

    this.clearMissionSubscription();
    this.mission_subscription = new Subscription();
    this.luJsonService.getMissionText(this.id).subscribe(text => this.text = text);
    this.luLuLocaleService.getLocaleEntry("MissionText", this.id).subscribe(entry => this.textsLocale = entry);
    this.luLuLocaleService.getLocaleEntry("Missions", this.id).subscribe(entry => this.missionLocale = entry);
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
