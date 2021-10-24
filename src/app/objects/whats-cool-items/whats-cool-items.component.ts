import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_WhatsCoolItemSpotlight } from '../../../defs/cdclient';
import { Locale_WhatsCoolItemSpotlight } from '../../../defs/locale';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

@Component({
  selector: 'lux-whats-cool-items',
  templateUrl: './whats-cool-items.component.html',
  styleUrls: ['./whats-cool-items.component.css']
})
export class WhatsCoolItemsComponent implements OnInit {

  $list: Observable<DB_WhatsCoolItemSpotlight[]>;
  $loc: Observable<{ [key: string]: Locale_WhatsCoolItemSpotlight }>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const TABLE = "WhatsCoolItemSpotlight";
    this.$list = this.luCoreData.getTableEntry<DB_WhatsCoolItemSpotlight>(TABLE, 'all');
    this.$loc = this.luCoreData.getLocaleSubtree<Locale_WhatsCoolItemSpotlight>(TABLE);
  }

  loc(key: number): Observable<Locale_WhatsCoolItemSpotlight> {
    return this.$loc.pipe(map(x => { return x[String(key)]; }));
  }

}
