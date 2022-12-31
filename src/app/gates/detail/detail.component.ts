import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Preconditions, DB_PropertyTemplate, DB_RewardCodes, DB_WhatsCoolItemSpotlight } from '../../../defs/cdclient';
import { LocaleTypePick, Locale_Preconditions, Locale_PropertyTemplate, Locale_RewardCodes, Locale_WhatsCoolItemSpotlight, Locale_WhatsCoolNewsAndTips, Locale_ZoneLoadingTips, Locale_ZoneTable } from '../../../defs/locale';
import { mapArr, mapToDict, pick } from '../../../defs/rx';
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

interface Precondition {
  id: number;
  $loc: Observable<Locale_Preconditions>;
  $row: Observable<Pick<DB_Preconditions, "id">>;
}

interface PropertyTemplate {
  id: number;
  $loc: Observable<Locale_PropertyTemplate>;
  $row: Observable<Pick<DB_PropertyTemplate, "id" | "mapID" | "vendorMapID">>;
}

interface WhatsCoolItem {
  id: number;
  $loc: Observable<Pick<Locale_WhatsCoolItemSpotlight, "description">>;
  $row: Observable<Pick<DB_WhatsCoolItemSpotlight, "id" | "itemID">>;
}

interface RewardCode {
  id: number;
  $loc: Observable<Locale_RewardCodes>;
  $row: Observable<Pick<DB_RewardCodes, "id" | "code" | "attachmentLOT">>;
}

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;
  $data: Observable<Rev_GateVersion | null>;

  $preconditions: Observable<Precondition[]>;
  $propertyTemplates: Observable<PropertyTemplate[]>;
  $whatsCoolNews: Observable<WhatsCoolNews[]>;
  $whatsCoolItems: Observable<WhatsCoolItem[]>;
  $zoneLoadingTips: Observable<ZoneLoadingTip[]>;
  $zones: Observable<Zone[]>;
  $rewardCodes: Observable<RewardCode[]>;

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
      cd.queryLocaleNum$("WhatsCoolNewsAndTips", ["storyTitle", "text"]),
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
      cd.queryLocaleNum$("ZoneTable", ["DisplayDescription"]),
    )
    this.$zones = $zoneIds.pipe(
      mapArr(id => {
        return {
          id,
          $loc: $zonesLoc.pipe(pick(id))
        };
      })
    );

    // Preconditions
    let $preconditionIds = this.$data.pipe(map(data => data.preconditions));
    let $preconditionsLoc = $preconditionIds.pipe(
      cd.queryLocaleNum$("Preconditions", ["FailureReason"])
    )
    let $preconditionTable = $preconditionIds.pipe(
      cd.queryTableEntries$<number[], DB_Preconditions>("Preconditions", ["id"]),
      mapToDict("id"),
      shareReplay(1),
    );
    this.$preconditions = $preconditionIds.pipe(
      mapArr(id => {
        return {
          id,
          $loc: $preconditionsLoc.pipe(pick(id)),
          $row: $preconditionTable.pipe(pick(id)),
        };
      }),
    );

    // Property Templates
    let $propertyTemplateIds = this.$data.pipe(map(data => data.property_template));
    let $propertyTemplateLoc = $propertyTemplateIds.pipe(
      cd.queryLocaleNum$("PropertyTemplate", ["name", "description"]),
    );
    let $propertyTemplateRows = $propertyTemplateIds.pipe(
      cd.queryTableEntries$("PropertyTemplate", ["id", "mapID", "vendorMapID"]),
      mapToDict("id"),
      shareReplay(1),
    );
    this.$propertyTemplates = $propertyTemplateIds.pipe(
      mapArr(id => {
        let $loc = $propertyTemplateLoc.pipe(pick(id));
        let $row = $propertyTemplateRows.pipe(pick(id));
        return { id, $loc, $row };
      }),
    );

    // Reward Codes
    let $rewardCodeIds = this.$data.pipe(map(data => data.reward_codes));
    let $rewardCodesLoc = $rewardCodeIds.pipe(
      cd.queryLocaleNum$("RewardCodes", ["bodyText", "subjectText"]),
    );
    let $rewardCodeRows = $rewardCodeIds.pipe(
      cd.queryTableEntries$("RewardCodes", ["id", "code", "attachmentLOT"]),
      mapToDict("id")
    );
    this.$rewardCodes = $rewardCodeIds.pipe(
      mapArr(id => {
        let $loc = $rewardCodesLoc.pipe(pick(id));
        let $row = $rewardCodeRows.pipe(pick(id));
        return { id, $loc, $row }
      })
    );

    // What's Cool – Items
    let $whatsCoolItemIds = this.$data.pipe(map(data => data.whats_cool_item_spotlight));
    let $whatsCoolItemRows = $whatsCoolItemIds.pipe(
      cd.queryTableEntries$<number[], DB_WhatsCoolItemSpotlight>("WhatsCoolItemSpotlight", ["id", "itemID"]),
      mapToDict("id"),
      shareReplay(1)
    );
    let $whatsCoolItemLoc = $whatsCoolItemIds.pipe(
      cd.queryLocaleNum$("WhatsCoolItemSpotlight", ["description"]),
    );
    this.$whatsCoolItems = $whatsCoolItemIds.pipe(
      mapArr(id => {
        return {
          id,
          $loc: $whatsCoolItemLoc.pipe(pick(id)),
          $row: $whatsCoolItemRows.pipe(pick(id)),
        }
      }),
      shareReplay(1),
    );
  }
}
