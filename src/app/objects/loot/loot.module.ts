import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilModule } from '../../util/util.module';

import { LootMatrixComponent } from './loot-matrix/loot-matrix.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import { LootTableIndexComponent } from './loot-table-index/loot-table-index.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

@NgModule({
  declarations: [
    LootMatrixComponent,
    LootTableComponent,
    LootTableIndexComponent,
    CurrencyTableComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule.forChild([])
  ],
  exports: [
    LootMatrixComponent,
    LootTableComponent,
    LootTableIndexComponent,
    CurrencyTableComponent
  ]
})
export class LootModule { }
