import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_BrickIDTable } from '../../../defs/cdclient';

import { LuJsonService, LuLocaleService } from '../../services';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

@Component({
  selector: 'app-brick-ids',
  templateUrl: './brick-ids.component.html',
  styleUrls: ['./brick-ids.component.css']
})
export class BrickIdsComponent implements OnInit {

  $table: Observable<DB_BrickIDTable[]>;
  sort: string = 'LEGOBrickID';
  limit: number = 50;
  objects: any = {};
  $page: Observable<number>;

  constructor(private luJsonService: LuJsonService, private route: ActivatedRoute) {
    this.$page = this.route.params.pipe(map(p => Number(p.page || 0)));
  }

  ngOnInit() {
    this.getTable();
  }

  /*
  onLocaleTableObjects(table: any) {
    table.pages.forEach(page => this.luLocale.getLocalePage("Objects", page).subscribe(this.onLocalTableObjectsPage.bind(this)))
  }

  onLocalTableObjectsPage(page: any) {
    Object.assign(this.objects, page);
  }
  */

  getTable(): void {
    this.$table = this.luJsonService.getSingleTable("BrickIDTable");
  }

  setSort(key: string) {
    this.sort = key;
  }
}
