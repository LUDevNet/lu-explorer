import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Rev_LootMatrix } from '../../../../defs/api';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-loot-matrix-used-by',
  templateUrl: './loot-matrix-used-by.component.html',
  styleUrls: ['./loot-matrix-used-by.component.css']
})
export class LootMatrixUsedByComponent implements OnChanges {
  @Input()
  matrix: Rev_LootMatrix;

  vendor?: { id: number, lots$: Observable<number[]> }[];
  package?: { id: number, lots$: Observable<number[]> }[];
  //smashable?: { id: number, lots$: Observable<number[]> }[];
  destructible?: { id: number, lots$: Observable<number[]> }[];

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.vendor = this.luCoreData.lotsForComponentsOpt(this.matrix.components?.vendor, 16);
    this.package = this.luCoreData.lotsForComponentsOpt(this.matrix.components?.package, 53);
    this.destructible = this.luCoreData.lotsForComponentsOpt(this.matrix.components?.destructible, 7);
  }
}
