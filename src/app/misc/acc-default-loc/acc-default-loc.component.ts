import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';
import { AccessoryDefaultLoc } from '../../cdclient';

@Component({
  selector: 'app-acc-default-loc',
  templateUrl: './acc-default-loc.component.html',
  styleUrls: ['./acc-default-loc.component.css']
})
export class AccDefaultLocComponent implements OnInit {

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.luJsonService.getAccessoryDefaultLoc().subscribe(acc => this.acc = acc);
  }

  acc: AccessoryDefaultLoc[];

}
