import { Component, OnInit } from '@angular/core';

import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-brick-ids',
  templateUrl: './brick-ids.component.html',
  styleUrls: ['./brick-ids.component.css']
})
export class BrickIdsComponent implements OnInit {

  table: any[];
  objects: any = {};

  constructor(private luJsonService: LuJsonService, private luLocale: LuLocaleService) { }

  ngOnInit() {
    this.getTable();
    this.luLocale.getLocaleTable("Objects").subscribe(this.onLocaleTableObjects.bind(this));
  }

  onLocaleTableObjects(table: any) {
    table.pages.forEach(page => this.luLocale.getLocalePage("Objects", page).subscribe(this.onLocalTableObjectsPage.bind(this)))
  }

  onLocalTableObjectsPage(page: any) {
    Object.assign(this.objects, page);
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
