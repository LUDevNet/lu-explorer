import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchIconDirective } from './icon/fetchIcon.directive';
import { FetchItemDirective } from './item/fetchItem.directive';
import { FetchObjectDirective } from './object/fetchObject.directive';
import { IconDirective } from './icon/icon.directive';
import { ItemDirective } from './item/item.directive';
import { ItemSetComponent } from './item-set/item-set.component';
import { ItemTooltipComponent } from './item-tooltip/item-tooltip.component';
import { ItemTooltipDirective } from './item-tooltip/item-tooltip.directive';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { CurrencyComponent } from './currency/currency.component';
import { SignageComponent } from './signage/signage.component';
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
import { ItemListComponent } from './item-list/item-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ItemSetListComponent } from './item-set-list/item-set-list.component';

const COMPONENTS = [
  CoinsComponent,
  CurrencyComponent,
  FetchIconDirective,
  FetchItemDirective,
  FetchObjectDirective,
  IconDirective,
  ItemDirective,
  ItemSetComponent,
  ItemTooltipComponent,
  ItemTooltipDirective,
  SignageComponent,
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
  ItemListComponent,
  SkillListComponent,
  ItemSetListComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    UtilModule,
    RouterModule,
  ],
  exports: COMPONENTS,
})
export class GuiModule { }
