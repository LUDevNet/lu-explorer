import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

const zonesRoutes: Routes = [
  { path: ':id', component: ZoneDetailComponent },
  { path: ':id/:sc', component: ScenesComponent },
  { path: '', component: ZoneIndexComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(zonesRoutes) ],
  exports: [ RouterModule ]
})
export class ZonesRoutingModule { }
