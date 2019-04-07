import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubSpaComponent } from './util/github-spa/github-spa.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'misc', loadChildren: './misc/misc.module#MiscModule' },
  { path: 'zones', loadChildren: './zones/zones.module#ZonesModule' },
  { path: 'skills', loadChildren: './skills/skills.module#SkillsModule' },
  { path: 'scripts', loadChildren: './scripts/scripts.module#ScriptsModule' },
  { path: 'objects', loadChildren: './objects/objects.module#ObjectsModule' },
  { path: 'missions', loadChildren: './missions/missions.module#MissionsModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule'  },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
