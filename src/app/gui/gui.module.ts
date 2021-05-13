import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { FactionListComponent } from './faction-list/faction-list.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { PreconditionComponent } from './precondition/precondition.component';
import { ItemRarityComponent } from './item-rarity/item-rarity.component';
import { ItemValueComponent } from './item-value/item-value.component';
import { SimpleFlagComponent } from './simple-flag/simple-flag.component';
import { ColorFlagComponent } from './color-flag/color-flag.component';
import { NumberFlagComponent } from './number-flag/number-flag.component';
import { PreconditionTreeComponent } from './precondition-tree/precondition-tree.component';
import { BuffFlagComponent } from './buff-flag/buff-flag.component';


@NgModule({
  declarations: [
    ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent, PreconditionComponent,
    ItemRarityComponent,
    ItemValueComponent,
    SimpleFlagComponent,
    ColorFlagComponent,
    NumberFlagComponent,
    PreconditionTreeComponent,
    BuffFlagComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
  ],
  exports: [
    ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent, PreconditionComponent,
    PreconditionTreeComponent,
    ItemRarityComponent,
    ItemValueComponent,
    SimpleFlagComponent,
    ColorFlagComponent,
    NumberFlagComponent,
    BuffFlagComponent
  ],
})
export class GuiModule { }
