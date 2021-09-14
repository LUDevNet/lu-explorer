import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NpcIconComponent } from './npc-icon/npc-icon.component';

import { ObjectTypesIndexComponent } from './types-index/types-index.component';
import { ObjectsByTypeComponent } from './by-type/by-type.component';
import { ObjectsByComponentComponent } from './by-component/by-component.component';
import { ObjectComponentsIndexComponent } from './components-index/components-index.component';
import { ObjectDetailComponent } from './detail/detail.component';
import { ObjectsComponent } from './objects.component';

import { UtilModule } from '../util/util.module';
import { ComponentsModule } from './components/components.module';
import { LootModule } from './loot/loot.module';
import { ObjectsRoutingModule } from './objects-routing.module';
import { GuiModule } from '../gui/gui.module';
import { WhatsCoolItemsComponent } from './whats-cool-items/whats-cool-items.component';
import { RewardCodesComponent } from './reward-codes/reward-codes.component';
import { ObjectsSearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    NpcIconComponent,
    ObjectTypesIndexComponent,
    ObjectsByTypeComponent,
    ObjectsByComponentComponent,
    ObjectComponentsIndexComponent,
    ObjectDetailComponent,
    ObjectsComponent,
    WhatsCoolItemsComponent,
    RewardCodesComponent,
    ObjectsSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    LootModule,
    UtilModule,
    ObjectsRoutingModule,
    GuiModule,
  ],
  exports: [
    LootModule,
    NpcIconComponent
  ]
})
export class ObjectsModule { }
