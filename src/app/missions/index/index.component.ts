import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuJsonService, LuLocaleService } from '../../services';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';
import { DB_MissionsByType } from '../../util/services/lu-json.service';

type MissionTypes = {[key: string]: string[] };
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MissionIndexComponent implements OnInit {

  missions: any = {};
  mission_types: DB_MissionsByType = {};
  $mission_types: Observable<MissionTypes>;

  constructor(
    private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService,
    private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.$mission_types = this.luCoreDataService.getRev<MissionTypes>('mission_types')
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
