import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuJsonService, LuLocaleService } from '../../../services';
import { DB_ItemSets_Ref } from '../../../cdclient';

@Component({
  selector: 'app-item-set-index',
  templateUrl: './item-set-index.component.html',
  styleUrls: ['./item-set-index.component.css']
})
export class ItemSetIndexComponent implements OnInit {

  table: Observable<DB_ItemSets_Ref[]>;

  constructor(
    private luJsonService: LuJsonService,
    private LuLocaleService: LuLocaleService
  ) { }

  ngOnInit() {
    this.table = this.luJsonService.getSingleTable('ItemSets');
  }

}
