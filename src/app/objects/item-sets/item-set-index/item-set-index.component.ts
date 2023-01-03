import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuCoreDataService } from '../../../services';
import { DB_ItemSets } from '../../../../defs/cdclient';

@Component({
  selector: 'app-item-set-index',
  templateUrl: './item-set-index.component.html',
  styleUrls: ['./item-set-index.component.css']
})
export class ItemSetIndexComponent implements OnInit {

  table: Observable<DB_ItemSets[]>;

  constructor(
    private coreData: LuCoreDataService,
  ) { }

  ngOnInit() {
    this.table = this.coreData.getFullTable('ItemSets');
  }

}
