import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_WhatsCoolItemSpotlight } from '../../cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

@Component({
  selector: 'lux-whats-cool-items',
  templateUrl: './whats-cool-items.component.html',
  styleUrls: ['./whats-cool-items.component.css']
})
export class WhatsCoolItemsComponent implements OnInit {

  $list: Observable<DB_WhatsCoolItemSpotlight[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$list = this.luCoreData.getTableEntry<DB_WhatsCoolItemSpotlight>('WhatsCoolItemSpotlight', 'all');
  }

}
