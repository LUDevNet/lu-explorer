import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilModule } from '../util/util.module';
import { LootModule } from '../objects/loot/loot.module';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [
    ActivityDetailComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    LootModule,
    ActivitiesRoutingModule
  ],
  exports: [
    ActivityDetailComponent,
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
