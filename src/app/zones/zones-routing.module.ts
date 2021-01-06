import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

const zonesRoutes: Routes = [
  { path: ':id', component: ZoneDetailComponent, data: { title: "Zone" } },
  { path: ':id/:sc', component: ScenesComponent, data: { title: "Scene" } },
  { path: ':id/:sc/:obj', component: ScenesComponent, data: { title: "Object - Scene" } },
  { path: '', component: ZoneIndexComponent, data: { title: "Zones" } }
]

@NgModule({
  imports: [ RouterModule.forChild(zonesRoutes) ],
  exports: [ RouterModule ]
})
export class ZonesRoutingModule { }
