import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionsComponent } from './missions.component';
import { MissionIndexComponent } from './index/index.component';
import { MissionDetailComponent } from './detail/detail.component';
import { MissionsByTypeComponent } from './by-type/by-type.component';
import { MissionsBySubtypeComponent } from './by-subtype/by-subtype.component';


const missionsRoutes = [
  { path: 'search', component: MissionsComponent, data: { title: "Search - Missions" } },
  { path: ':id', component: MissionDetailComponent, data: { title: params => `Mission #${params['id']}` } },
  { path: 'type/:type', component: MissionsByTypeComponent, data: { title: params => `${params['type']} - Missions` } },
  { path: 'type/:type/subtype/:subtype', component: MissionsBySubtypeComponent, data: { title: params => `${params['subtype']} - ${params['type']} - Missions` } },
  { path: '', component: MissionIndexComponent, data: { title: "Missions" } },
];

@NgModule({
  imports: [ RouterModule.forChild(missionsRoutes) ],
  exports: [ RouterModule ]
})
export class MissionsRoutingModule { }
