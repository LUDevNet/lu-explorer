import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilModule } from '../../util/util.module';

import { LootMatrixComponent } from './loot-matrix/loot-matrix.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import { LootTableIndexComponent } from './loot-table-index/loot-table-index.component';
import { GuiModule } from '../../gui/gui.module';

@NgModule({
  declarations: [
    LootMatrixComponent,
    LootTableComponent,
    LootTableIndexComponent
  ],
  imports: [
    GuiModule,
    CommonModule,
    UtilModule,
    RouterModule.forChild([])
  ],
  exports: [
    LootMatrixComponent,
    LootTableComponent,
    LootTableIndexComponent
  ]
})
export class LootModule { }
