import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_Objects } from '../../../../defs/api';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-used-by',
  templateUrl: './used-by.component.html',
  styleUrls: ['./used-by.component.css']
})
export class UsedByComponent implements OnInit, OnChanges {

  @Input()
  rev: Rev_Objects;

  inv: { id: number, lots$: Observable<number[]> }[];
  currency_lot: { id: number, lots$: Observable<number[] | null> }[];

  constructor(private luCoreDataService: LuCoreDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inv = this.rev.inventory_component?.map(id => ({ id, lots$: this.$lotsForComponent(id, 17) }));
    this.currency_lot = this.rev.item_component?.currency_lot.map(id => ({ id, lots$: this.$lotsForComponent(id, 17) }));
  }

  $lotsForComponent(id: number, cid: number): Observable<number[]> {
    return this.luCoreDataService.getRevEntry<{ lots: number[] } | null>('component_types/' + cid, id).pipe(map((x) => x?.lots));
  }
}
