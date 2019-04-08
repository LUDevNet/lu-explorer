import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-brick-ids',
  templateUrl: './brick-ids.component.html',
  styleUrls: ['./brick-ids.component.css']
})
export class BrickIdsComponent implements OnInit {

  table: any[];

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable()
  }

  getTable(): void
  {
  	this.luJsonService
      .getSingleTable("BrickIDTable")
      .subscribe(table => this.table = table.sort(this.compareBrickIDs));
  }

  compareBrickIDs(a,b) {
    return a.LEGOBrickID - b.LEGOBrickID;
  }

}
