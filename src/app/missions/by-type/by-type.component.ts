import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService } from '../../lu-json.service';
import { LocaleService } from '../../locale.service';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class MissionsByTypeComponent implements OnInit {

  mission_ids: Array<number> = [];
  mission_names: any = {};
  defined_type: string = "";
  subtypes: Array<string> = [];

  constructor(private router: Router, private route: ActivatedRoute,
  	private luJsonService: LuJsonService, private localeService: LocaleService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.defined_type = this.route.snapshot.paramMap.get('type');
    this.getMissionNames();
    this.getMissions();
  }

  getMissions(): void
  {
    this.luJsonService.getMissionsByType().subscribe(missions => this.processMissions(missions));
  }

  processMissions(missions): void
  {
    let type_missions = missions[this.defined_type];

    this.subtypes = Object.keys(type_missions).filter(x => x);
    this.mission_ids = type_missions[""];

    //this.ref.detectChanges();
  }

  getMissionNames():void
  {
  	this.localeService.getLocaleTable("Missions").subscribe(index => this.processMissionNameIndex(index));
  }

  processMissionNameIndex(index: any):void
  {
    for (let page of index.pages)
    {
      this.localeService.getLocalePage("Missions", page).subscribe(page => this.processMissionNamesPage(page));
    }
  }

  processMissionNamesPage(page: any):void
  {
    this.mission_names = Object.assign({}, this.mission_names, page);
  }

}
