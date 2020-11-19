import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubSpaComponent } from './util/github-spa/github-spa.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'misc', loadChildren: () => import('./misc/misc.module').then(m => m.MiscModule) },
  { path: 'zones', loadChildren: () => import('./zones/zones.module').then(m => m.ZonesModule) },
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) },
  { path: 'scripts', loadChildren: () => import('./scripts/scripts.module').then(m => m.ScriptsModule) },
  { path: 'objects', loadChildren: () => import('./objects/objects.module').then(m => m.ObjectsModule) },
  { path: 'missions', loadChildren: () => import('./missions/missions.module').then(m => m.MissionsModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)  },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
