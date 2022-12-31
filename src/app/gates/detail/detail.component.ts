import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { Locale_WhatsCoolNewsAndTips, Locale_ZoneLoadingTips, Locale_ZoneTable } from '../../../defs/locale';
import { mapArr, pick } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';


class ZoneLoadingTip {
  constructor(
    public id: number,
    public $loc: Observable<Locale_ZoneLoadingTips>,
  ) { }
}

interface WhatsCoolNews {
  id: number;
  $loc: Observable<Locale_WhatsCoolNewsAndTips>;
}

interface Zone {
  id: number;
  $loc: Observable<Locale_ZoneTable>;
}

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;
  $data: Observable<Rev_GateVersion | null>;

  $zoneLoadingTips: Observable<ZoneLoadingTip[]>;
  $whatsCoolNews: Observable<WhatsCoolNews[]>;
  $zones: Observable<Zone[]>;

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const cd = this.luCoreData;
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));

    // Zone Loading Tips
    let $zoneLoadingTipIds = this.$data.pipe(map(x => x.zone_loading_tips));
    let $zoneLoadingTipsLocale = $zoneLoadingTipIds.pipe(
      cd.queryLocaleNum$("ZoneLoadingTips", ["title", "tip1", "tip2"]),
      shareReplay(1),
    );
    this.$zoneLoadingTips = $zoneLoadingTipIds.pipe(
      mapArr(id => new ZoneLoadingTip(id, $zoneLoadingTipsLocale.pipe(pick(id))))
    )

    // What's Cool – News & Tips
    let $whatsCoolNewsIds = this.$data.pipe(map(data => data.whats_cool_news_and_tips));
    let $whatsCoolNewsLoc = $whatsCoolNewsIds.pipe(
      cd.queryLocaleNum$<Locale_WhatsCoolNewsAndTips>("WhatsCoolNewsAndTips", ["storyTitle", "text"]),
    )
    this.$whatsCoolNews = $whatsCoolNewsIds.pipe(
      mapArr(id => {
        return {
          id,
          $loc: $whatsCoolNewsLoc.pipe(pick(id)),
        };
      })
    )

    // Zones
    let $zoneIds = this.$data.pipe(map(data => data.zones));
    let $zonesLoc = $zoneIds.pipe(
      cd.queryLocaleNum$<Locale_ZoneTable>("ZoneTable", ["DisplayDescription"]),
    )
    this.$zones = $zoneIds.pipe(
      mapArr(id => {
        return {
          id,
          $loc: $zonesLoc.pipe(pick(id))
        };
      })
    );
  }
}
