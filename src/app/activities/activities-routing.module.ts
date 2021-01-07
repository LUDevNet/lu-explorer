import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivitiesComponent } from './activities.component';

const activitesRoutes = [
  { path: ':id', component: ActivityDetailComponent, data: { title: params => `Activity #${params['id']}` } },
  { path: '', component: ActivitiesComponent, data: { title: "Activities" } },
];

@NgModule({
  imports: [RouterModule.forChild(activitesRoutes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
