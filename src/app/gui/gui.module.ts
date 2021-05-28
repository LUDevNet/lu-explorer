import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { FactionListComponent } from './faction-list/faction-list.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { PreconditionComponent } from './precondition/precondition.component';
import { ItemRarityComponent } from './item-rarity/item-rarity.component';
import { SimpleFlagComponent } from './simple-flag/simple-flag.component';
import { ColorFlagComponent } from './color-flag/color-flag.component';
import { NumberFlagComponent } from './number-flag/number-flag.component';
import { PreconditionTreeComponent } from './precondition-tree/precondition-tree.component';
import { BuffFlagComponent } from './buff-flag/buff-flag.component';
import { ReputationComponent } from './reputation/reputation.component';
import { UscoreComponent } from './uscore/uscore.component';
import { SlotComponent } from './slot/slot.component';
import { ObjectComponent } from './object/object.component';
import { ObjectDirective } from './object/object.directive';
import { MissiondisplayRewardComponent } from './missiondisplay-reward/missiondisplay-reward.component';
import { BuffComponent } from './buff/buff.component';
import { MissionComponent } from './mission/mission.component';
import { MissionDirective } from './mission/mission.directive';

@NgModule({
  declarations: [
    CoinsComponent,
    ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent, PreconditionComponent,
    ItemRarityComponent,
    SimpleFlagComponent,
    ColorFlagComponent,
    NumberFlagComponent,
    PreconditionTreeComponent,
    BuffFlagComponent,
    ReputationComponent,
    UscoreComponent,
    SlotComponent,
    ObjectComponent,
    ObjectDirective,
    MissiondisplayRewardComponent,
    BuffComponent,
    MissionComponent,
    MissionDirective,
  ],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
  ],
  exports: [
    CoinsComponent,
    ItemComponent, TooltipComponent, TooltipDirective, FactionListComponent, CurrencyTableComponent, PreconditionComponent,
    PreconditionTreeComponent,
    ItemRarityComponent,
    SimpleFlagComponent,
    ColorFlagComponent,
    NumberFlagComponent,
    BuffFlagComponent,
    BuffComponent,
    ReputationComponent,
    UscoreComponent,
    SlotComponent,
    ObjectComponent,
    ObjectDirective,
    MissiondisplayRewardComponent,
    MissionComponent,
    MissionDirective,
  ],
})
export class GuiModule { }
