import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubSpaComponent } from './github-spa/github-spa.component';
import { ZonesComponent } from './zones/zones.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './zone-detail/scenes/scenes.component';
//import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { MiscComponent } from './misc/misc.component';
//import { BrickColorsComponent } from './brick-colors/brick-colors.component';
//import { EventGatingComponent } from './event-gating/event-gating.component';
import { FactionsComponent } from './factions/factions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BehaviorDetailAltComponent }   from './behavior/detail-alt/detail-alt.component';
import { SkillComponent } from './skill/skill.component';
import { ObjectsComponent } from './objects/objects.component';
import { ObjectDetailComponent } from './objects/detail/detail.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionIndexComponent } from './missions/index/index.component';
import { MissionDetailComponent } from './missions/detail/detail.component';
import { MissionsByTypeComponent } from './missions/by-type/by-type.component';
import { MissionsBySubtypeComponent } from './missions/by-subtype/by-subtype.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import { ObjectTypesIndexComponent } from './objects/types-index/types-index.component';

const routes: Routes = [
  { path: 'misc', component: MiscComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'zones/:id', component: ZoneDetailComponent },
  { path: 'zones/:id/:sc', component: ScenesComponent },
  { path: 'behaviors/:id', component: BehaviorDetailAltComponent },
  { path: 'skills/:id', component: SkillComponent },
  { path: 'loot-table/:id', component: LootTableComponent },
  { path: 'objects', component: ObjectsComponent },
  { path: 'objects/types', component: ObjectTypesIndexComponent },
  { path: 'objects/:id', component: ObjectDetailComponent },
  { path: 'missions', component: MissionIndexComponent },
  { path: 'missions/search', component: MissionsComponent },
  { path: 'missions/detail/:id', component: MissionDetailComponent },
  { path: 'missions/:type', component: MissionsByTypeComponent },
  { path: 'missions/:type/:subtype', component: MissionsBySubtypeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
