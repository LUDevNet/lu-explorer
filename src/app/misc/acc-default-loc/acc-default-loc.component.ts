import { Component, OnInit } from '@angular/core';

import { LuCoreDataService } from '../../services';
import { DB_AccessoryDefaultLoc } from '../../../defs/cdclient';

@Component({
  selector: 'app-acc-default-loc',
  templateUrl: './acc-default-loc.component.html',
  styleUrls: ['./acc-default-loc.component.css']
})
export class AccDefaultLocComponent implements OnInit {

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.coreData.getFullTable("AccessoryDefaultLoc").subscribe(acc => this.acc = acc);
  }

  acc: DB_AccessoryDefaultLoc[];

}
