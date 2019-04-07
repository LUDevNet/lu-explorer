import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionsComponent } from './missions.component';
import { MissionIndexComponent } from './index/index.component';
import { MissionDetailComponent } from './detail/detail.component';
import { MissionsByTypeComponent } from './by-type/by-type.component';
import { MissionsBySubtypeComponent } from './by-subtype/by-subtype.component';


const missionsRoutes = [
  { path: 'search', component: MissionsComponent },
  { path: ':id', component: MissionDetailComponent },
  { path: 'type/:type', component: MissionsByTypeComponent },
  { path: 'type/:type/subtype/:subtype', component: MissionsBySubtypeComponent },
  { path: '', component: MissionIndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(missionsRoutes) ],
  exports: [ RouterModule ]
})
export class MissionsRoutingModule { }
