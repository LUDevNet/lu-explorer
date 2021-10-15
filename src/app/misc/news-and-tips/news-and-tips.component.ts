import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_WhatsCoolNewsAndTips } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

interface Locale_WhatsCoolNewsAndTips {
  storyTitle: string,
  text: string,
};

@Component({
  selector: 'lux-news-and-tips',
  templateUrl: './news-and-tips.component.html',
  styleUrls: ['./news-and-tips.component.css']
})
export class NewsAndTipsComponent implements OnInit {

  $list: Observable<DB_WhatsCoolNewsAndTips[]>;
  $loc: Observable<{[key: string]: Locale_WhatsCoolNewsAndTips}>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const TABLE = "WhatsCoolNewsAndTips";
    this.$list = this.luCoreData.getTableEntry<DB_WhatsCoolNewsAndTips>(TABLE, 'all');
    this.$loc = this.luCoreData.getLocaleSubtree<Locale_WhatsCoolNewsAndTips>(TABLE);
  }

  loc(key: number): Observable<Locale_WhatsCoolNewsAndTips> {
    return this.$loc.pipe(map(x => { return x[String(key)]; }));
  }

}
