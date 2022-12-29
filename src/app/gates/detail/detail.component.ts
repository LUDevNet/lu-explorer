import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Icons, DB_MissionTasks } from '../../../defs/cdclient';
import { Locale_Mission } from '../../../defs/locale';
import { mapRec, mapToDict, mapToMultiDict, pick, recToSet, values } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';

interface DB_ItemSets_Ref {
  setID: number;
  kitImage?: number
}

const ITEM_SET_KEYS: (keyof DB_ItemSets_Ref)[] = [
  "setID",
  "kitImage",
];

interface Locale_ItemSet {
  kitName?: string,
}

class ItemSet {
  constructor(
    public id: number,
    public $table: Observable<DB_ItemSets_Ref | undefined>,
    public $icon: Observable<DB_Icons | undefined>,
    public $loc: Observable<Locale_ItemSet | undefined>
  ) { }
}

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;

  $data: Observable<Rev_GateVersion | null>;
  $missionIds: Observable<number[]>;
  $itemSets: Observable<ItemSet[]>;

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const cd = this.luCoreData;
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));
    this.$missionIds = this.$data.pipe(map(d => d.missions));

    let $itemSetIds = this.$data.pipe(map(d => d.item_sets));
    let $itemSetsTable = $itemSetIds.pipe(
      cd.queryTableEntries$<number[], DB_ItemSets_Ref>('ItemSets', ITEM_SET_KEYS),
      mapToDict("setID"),
      shareReplay(1)
    )
    let $itemSetsLocale = $itemSetIds.pipe(
      cd.queryLocaleNum$<Locale_ItemSet>("ItemSets", ["kitName"]),
      shareReplay(1),
    );
    let $itemSetIcons = $itemSetsTable.pipe(
      values(),
      map((data: DB_ItemSets_Ref[]) => Array.from(data, d => d.kitImage).filter(v => v)),
      cd.icons(),
      shareReplay(1),
    );
    this.$itemSets = $itemSetIds.pipe(
      map(data => Array.from(data, id => {
        let $table = $itemSetsTable.pipe(pick(id), shareReplay(1));
        let $icon = $table.pipe(switchMap(t => $itemSetIcons.pipe(pick(t.kitImage))));
        let $loc = $itemSetsLocale.pipe(pick(id));
        return new ItemSet(id, $table, $icon, $loc);
      }))
    )
  }
}
