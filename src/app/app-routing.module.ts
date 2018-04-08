import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubSpaComponent } from './github-spa/github-spa.component';
import { ZonesComponent } from './zones/zones.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './zone-detail/scenes/scenes.component';
import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { BrickColorsComponent } from './brick-colors/brick-colors.component';
import { EventGatingComponent } from './event-gating/event-gating.component';
import { FactionsComponent } from './factions/factions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BehaviorDetailAltComponent }   from './behavior/detail-alt/detail-alt.component';
import { SkillComponent } from './skill/skill.component';
import { ObjectsComponent } from './objects/objects.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionDetailComponent } from './missions/detail/detail.component';
import { LootTableComponent } from './loot-table/loot-table.component';

const routes: Routes = [
  { path: 'acc', component: AccDefaultLocComponent },
  { path: 'brick-colors', component: BrickColorsComponent },
  { path: 'event-gating', component: EventGatingComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'zones/:id', component: ZoneDetailComponent },
  { path: 'zones/:id/:sc', component: ScenesComponent },
  { path: 'behaviors/:id', component: BehaviorDetailAltComponent },
  { path: 'skills/:id', component: SkillComponent },
  { path: 'loot-table/:id', component: LootTableComponent },
  { path: 'objects/:id', component: ObjectsComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'missions/:id', component: MissionDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
