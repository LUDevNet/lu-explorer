import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LuzOverviewComponent } from './luz-overview/luz-overview.component';
import { LuzPathComponent } from './luz-path/luz-path.component';
import { LuzPathsComponent } from './luz-paths/luz-paths.component';
import { LuzPathWaypointComponent } from './luz-path-waypoint/luz-path-waypoint.component';
import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

const zonesRoutes: Routes = [
  { path: '', component: ZoneIndexComponent, data: { title: "Zones" } },
  {
    path: ':id', component: ZoneDetailComponent, data: { title: params => `Zone #${params['id']}` },
    children: [
      { path: '', component: LuzOverviewComponent },
      { path: 'paths', component: LuzPathsComponent, data: { title: params => `Paths | Zone #${params['id']}` } },
      { path: 'paths/:path', component: LuzPathComponent, data: { title: params => `Path ${params['path']} | Zone #${params['id']}` } },
      { path: 'paths/:path/:waypoint', component: LuzPathWaypointComponent, data: { title: params => `Waypoint #${params['waypoint']} | Path ${params['path']} | Zone #${params['id']}` } }
    ]
  },
  { path: ':id/scenes/:sc', component: ScenesComponent, data: { title: params => `Scene #${params['sc']} | Zone #${params['id']}` } },
  { path: ':id/scenes/:sc/:obj', component: ScenesComponent, data: { title: params => `Object #${params['obj']} | Scene #${params['sc']} | Zone #${params['id']}` } }
]

@NgModule({
  imports: [ RouterModule.forChild(zonesRoutes) ],
  exports: [ RouterModule ]
})
export class ZonesRoutingModule { }
