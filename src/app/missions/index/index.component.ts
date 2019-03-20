import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';
import { LocaleService } from '../../locale.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MissionIndexComponent implements OnInit {

  missions: any = {};
  mission_types: any = {};

  constructor(private luJsonService: LuJsonService, private localeService: LocaleService) { }

  ngOnInit() {
    this.getMissions();
    this.getMissionsByType();
  }

  getMissions():void
  {
  	this.localeService.getLocaleTable("Missions").subscribe(index => this.processMissionIndex(index));
  }

  getMissionsByType():void
  {
    this.luJsonService.getMissionsByType().subscribe(missions => this.mission_types = missions);
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
  }

}
