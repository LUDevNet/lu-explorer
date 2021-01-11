import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemSetsRoutingModule } from './item-sets-routing.module';
import { UtilModule } from '../../util/util.module';
import { SkillRefModule } from '../../skills/skill-ref/skill-ref.module';

import { ItemSetDetailComponent } from './item-set-detail/item-set-detail.component';
import { ItemSetIndexComponent } from './item-set-index/item-set-index.component';
import { ItemSetSkillSetComponent } from './item-set-skill-set/item-set-skill-set.component';
import { GuiModule } from '../../gui/gui.module';

@NgModule({
  declarations: [
    ItemSetDetailComponent,
    ItemSetIndexComponent,
    ItemSetSkillSetComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    SkillRefModule,
    GuiModule,
    ItemSetsRoutingModule
  ]
})
export class ItemSetsModule { }
