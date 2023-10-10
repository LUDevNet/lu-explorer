import { Component, Input, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DB_Icons } from '../../../defs/cdclient';
import { LocaleField, Locale_ItemSets } from '../../../defs/locale';
import { mapToDict, pick, values } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';

interface DB_ItemSets_Ref {
  setID: number;
  kitImage?: number;
  kitRank: number;
}

const ITEM_SET_KEYS: (keyof DB_ItemSets_Ref)[] = [
  "setID",
  "kitImage",
  "kitRank",
];

class ItemSet {
  constructor(
    public id: number,
    public $table: Observable<DB_ItemSets_Ref | undefined>,
    public $icon: Observable<DB_Icons | undefined>,
    public $loc: Observable<Locale_ItemSets | undefined>
  ) { }
}

@Component({
  selector: 'lux-item-set-list',
  templateUrl: './item-set-list.component.html',
  styleUrls: ['./item-set-list.component.css']
})
export class ItemSetListComponent implements OnInit {
  @Input()
  set ids(value: number[] | "all") {
    if (value === "all") {
      this.luCoreData.getFullTable("ItemSets").subscribe(elems => this.$itemSetIds.next(elems.map(elem => elem.setID)));
    } else {
      this.$itemSetIds.next(value);
    }
  }

  private $itemSetIds = new ReplaySubject<number[]>(1);
  $itemSets: Observable<ItemSet[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    let cd = this.luCoreData;
    let $itemSetsTable = this.$itemSetIds.pipe(
      cd.queryTableEntries$<number[], DB_ItemSets_Ref>('ItemSets', ITEM_SET_KEYS),
      mapToDict("setID"),
      shareReplay(1)
    )
    type X = LocaleField<"ItemSets">
    let $itemSetsLocale = this.$itemSetIds.pipe(
      cd.queryLocaleNum$("ItemSets", ["kitName"]),
      shareReplay(1),
    );
    let $itemSetIcons = $itemSetsTable.pipe(
      values(),
      map((data: DB_ItemSets_Ref[]) => Array.from(data, d => d.kitImage).filter(v => v)),
      cd.icons(),
      shareReplay(1),
    );
    this.$itemSets = this.$itemSetIds.pipe(
      map(data => Array.from(data, id => {
        let $table = $itemSetsTable.pipe(pick(id), shareReplay(1));
        let $icon = $table.pipe(switchMap(t => $itemSetIcons.pipe(pick(t.kitImage))));
        let $loc = $itemSetsLocale.pipe(pick(id));
        return new ItemSet(id, $table, $icon, $loc);
      }))
    )
  }
}
