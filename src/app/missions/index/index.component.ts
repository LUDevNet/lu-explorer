import { Component, OnInit } from '@angular/core';
import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MissionIndexComponent implements OnInit {

  missions: any = {};
  mission_types: any = {};

  constructor(private luJsonService: LuJsonService, private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.getMissions();
    this.getMissionsByType();
  }

  getMissions():void
  {
  	this.luLocaleService.getLocaleTable("Missions").subscribe(index => this.processMissionIndex(index));
  }

  getMissionsByType():void
  {
    this.luJsonService.getMissionsByType().subscribe(missions => this.mission_types = missions);
  }

  processMissionIndex(index: any):void
  {
    for (let page of index.pages)
    {
      this.luLocaleService.getLocalePage("Missions", page).subscribe(page => this.processMissionPage(page));
    }
  }

  processMissionPage(page: any):void
  {
    this.missions = Object.assign({}, this.missions, page);
  }

}
