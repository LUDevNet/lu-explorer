import { Component, OnInit } from '@angular/core';

import { LuCoreDataService } from '../../services';
import { Locale_Missions } from '../../../defs/locale';

type MissionDict = Record<string, Locale_Missions>;

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsSearchComponent implements OnInit {

  missions: MissionDict = {};
  filteredMissions: MissionDict = {};
  needle: string = "";

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.getMissions();
  }

  filter(obj: any, predicate: any, max_size: number) {
    let keys = Object.keys(obj).filter(key => predicate(obj[key]))
    let to = Math.min(max_size, keys.length);
    return keys.slice(0, to).reduce((res, key) => (res[key] = obj[key], res), {});
  }

  updateFilterList() {
    this.filteredMissions = Object.assign({}, this.filter(this.missions, mission => mission.name.includes(this.needle), 100));
  }

  getMissions(): void {
    this.luCoreData.getLocaleSubtree("Missions").subscribe(index => this.processMissionsLocale(index));
  }

  processMissionsLocale(page: any): void {
    this.missions = Object.assign({}, this.missions, page);
    this.updateFilterList();
  }

}
