import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from './icon/icon.directive';
import { ItemDirective } from './item/item.directive';
import { ItemTooltipComponent } from './item-tooltip/item-tooltip.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { CurrencyComponent } from './currency/currency.component';
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
import { ObjectDirective } from './object/object.directive';
import { MissiondisplayRewardComponent } from './missiondisplay-reward/missiondisplay-reward.component';
import { BuffComponent } from './buff/buff.component';
import { MissionComponent } from './mission/mission.component';
import { MissionDirective } from './mission/mission.directive';
import { CustomFlagComponent } from './custom-flag/custom-flag.component';
import { GateVersionTocComponent } from './gate-version-toc/gate-version-toc.component';
import { GateVersionTagComponent } from './gate-version-tag/gate-version-tag.component';
import { SkillDirective } from './skill/skill.directive';
import { MissionListComponent } from './mission-list/mission-list.component';

@NgModule({
  declarations: [
    CoinsComponent,
    CurrencyComponent,
    IconDirective,
    ItemDirective,
    ItemTooltipComponent,
    TooltipComponent,
    TooltipDirective,
    FactionListComponent,
    CurrencyTableComponent,
    PreconditionComponent,
    ItemRarityComponent,
    SimpleFlagComponent,
    ColorFlagComponent,
    NumberFlagComponent,
    PreconditionTreeComponent,
    BuffFlagComponent,
    ReputationComponent,
    UscoreComponent,
    SlotComponent,
    ObjectDirective,
    MissiondisplayRewardComponent,
    BuffComponent,
    MissionComponent,
    MissionDirective,
    CustomFlagComponent,
    GateVersionTocComponent,
    GateVersionTagComponent,
    SkillDirective,
    MissionListComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
  ],
  exports: [
    CoinsComponent,
    CustomFlagComponent,
    CurrencyComponent,
    IconDirective,
    ItemDirective,
    ItemTooltipComponent,
    TooltipComponent,
    TooltipDirective,
    FactionListComponent,
    CurrencyTableComponent,
    PreconditionComponent,
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
    ObjectDirective,
    MissiondisplayRewardComponent,
    MissionComponent,
    MissionDirective,
    GateVersionTocComponent,
    GateVersionTagComponent,
    SkillDirective,
    MissionListComponent,
  ],
})
export class GuiModule { }
