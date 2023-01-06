import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';

import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { title: "Dashboard" } },
  { path: 'credits', component: CreditsComponent, data: { title: "Credits" } },
  { path: 'settings', component: SettingsComponent, data: { title: "Settings" } },
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
