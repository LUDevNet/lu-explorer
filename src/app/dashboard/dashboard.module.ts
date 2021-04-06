import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilModule } from '../util/util.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreditsComponent } from './credits/credits.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreditsComponent,
    ChangelogComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
