import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_LootTableIndex, Rev_Objects } from '../../../../defs/api';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-used-by',
  templateUrl: './used-by.component.html',
  styleUrls: ['./used-by.component.css']
})
export class UsedByComponent implements OnInit, OnChanges {

  @Input()
  rev: Rev_Objects;

  inv?: { id: number, lots$: Observable<number[]> }[];
  currency_lot?: { id: number, lots$: Observable<number[] | null> }[];
  loot_table?: { id: number, table$: Observable<Rev_LootTableIndex> }[];

  constructor(private luCoreDataService: LuCoreDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inv = this.luCoreDataService.lotsForComponentsOpt(this.rev.inventory_component, 17);
    this.currency_lot = this.luCoreDataService.lotsForComponentsOpt(this.rev.item_component?.currency_lot, 11);
    this.loot_table = this.rev?.loot_table_index.map(id => ({ id, table$: this.luCoreDataService.getRevEntry<Rev_LootTableIndex>('loot_table_index', id) }));
  }
}
