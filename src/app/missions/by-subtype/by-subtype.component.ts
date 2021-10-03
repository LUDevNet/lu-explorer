import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { LuJsonService, LuLocaleService } from '../../services';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

interface TypeKey {
  type: string;
  subtype: string;
}

interface TypeData {
  mission_ids: number[];
}
@Component({
  selector: 'app-by-subtype',
  templateUrl: './by-subtype.component.html',
  styleUrls: ['./by-subtype.component.css']
})
export class MissionsBySubtypeComponent implements OnInit {

  $defined: Observable<TypeKey>;
  $typeData: Observable<TypeData>;
  //defined_type: string = "";
  //defined_subtype: string = "";
  //mission_ids: Array<number> = [];
  //mission_names: any = {};

  constructor(private route: ActivatedRoute, private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.$defined = this.route.paramMap.pipe(map(map => {
      return {
        type: map.get('type'),
        subtype: map.get('subtype'),
      };
    }));
    this.$typeData = this.$defined.pipe(switchMap(defined => {
      return this.luCoreDataService.getRevEntry<TypeData>('mission_types', `${defined.type}/${defined.subtype}`);
    }));

    //this.getMissionNames();
    //this.getMissions();
  }

  /*
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
  }*/
}
