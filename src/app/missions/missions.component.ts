import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { LuJsonService } from '../lu-json.service';
import { LocaleService } from '../locale.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missions: any = {};
  filteredMissions: any = {};
  needle: string = "";

  constructor(private luJsonService: LuJsonService, private localeService: LocaleService) { }

  ngOnInit() {
    this.getMissions();
  }

  filter(obj: any, predicate: any, max_size: number)
  {
    let keys = Object.keys(obj).filter( key => predicate(obj[key]))
    let to = Math.min(max_size, keys.length);
    return keys.slice(0, to).reduce( (res, key) => (res[key] = obj[key], res), {});
  }

  updateFilterList()
  {
    this.filteredMissions = Object.assign({},this.filter(this.missions, mission => mission.name.includes(this.needle), 100));
  }

  getMissions():void
  {
  	this.localeService.getLocaleTable("Missions").subscribe(index => this.processMissionIndex(index));
  }

  processMissionIndex(index: any):void
  {
    for (let page of index.pages)
    {
      this.localeService.getLocalePage("Missions", page).subscribe(page => this.processMissionPage(page));
    }
  }

  processMissionPage(page: any):void
  {
    this.missions = Object.assign({}, this.missions, page);
    this.updateFilterList();
  }

}
