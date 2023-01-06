import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilModule } from '../util/util.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreditsComponent } from './credits/credits.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CreditsComponent,
    ChangelogComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
