import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { FactionListComponent } from './faction-list/faction-list.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';


@NgModule({
  declarations: [ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
  ],
  exports: [ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent],
})
export class GuiModule { }
