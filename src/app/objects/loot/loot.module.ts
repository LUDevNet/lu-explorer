import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilModule } from '../../util/util.module';

import { LootMatrixIndexComponent } from './loot-matrix-index/loot-matrix-index.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import { LootTableIndexComponent } from './loot-table-index/loot-table-index.component';
import { GuiModule } from '../../gui/gui.module';
import { LootMatrixComponent } from './loot-matrix/loot-matrix.component';
import { LootMatrixUsedByComponent } from './loot-matrix-used-by/loot-matrix-used-by.component';

@NgModule({
  declarations: [
    LootMatrixIndexComponent,
    LootTableComponent,
    LootTableIndexComponent,
    LootMatrixComponent,
    LootMatrixUsedByComponent
  ],
  imports: [
    GuiModule,
    CommonModule,
    UtilModule,
    RouterModule.forChild([])
  ],
  exports: [
    LootMatrixIndexComponent,
    LootTableComponent,
    LootTableIndexComponent
  ]
})
export class LootModule { }
