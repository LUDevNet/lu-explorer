import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-by-subtype',
  templateUrl: './by-subtype.component.html',
  styleUrls: ['./by-subtype.component.css']
})
export class MissionsBySubtypeComponent implements OnInit {

  defined_type: string = "";
  defined_subtype: string = "";
  mission_ids: Array<number> = [];
  mission_names: any = {};

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService, private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.defined_type = this.route.snapshot.paramMap.get('type');
    this.defined_subtype = this.route.snapshot.paramMap.get('subtype');

    this.getMissionNames();
    this.getMissions();
  }

  getMissions() {
    this.luJsonService.getMissionsByType().subscribe(missions => this.processMissions(missions));
  }

  processMissions(missions) {
    this.mission_ids = missions[this.defined_type][this.defined_subtype];
  }

  getMissionNames():void
  {
  	this.luLocaleService.getLocaleTable("Missions").subscribe(index => this.processMissionNameIndex(index));
  }

  processMissionNameIndex(index: any):void
  {
    for (let page of index.pages)
    {
      this.luLocaleService.getLocalePage("Missions", page).subscribe(page => this.processMissionNamesPage(page));
    }
  }

  processMissionNamesPage(page: any):void
  {
    this.mission_names = Object.assign({}, this.mission_names, page);
  }
}
