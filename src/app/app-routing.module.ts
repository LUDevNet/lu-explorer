import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlMatcher, UrlMatchResult, Route, UrlSegmentGroup, UrlSegment } from '@angular/router';

import { GithubSpaComponent } from './github-spa/github-spa.component';
import { ZonesComponent } from './zones/zones.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './zone-detail/scenes/scenes.component';
import { MiscComponent } from './misc/misc.component';
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
import { ObjectsByTypeComponent } from './objects/by-type/by-type.component';
import { ObjectsByComponentComponent } from './objects/by-component/by-component.component';
import { ObjectComponentsIndexComponent } from './objects/components-index/components-index.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailComponent } from './activities/activity-detail.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { ScriptFileComponent } from './scripts/script-file/script-file.component';

export function mapPath(segment: UrlSegment): string {
  return segment.path;
};

// https://stackblitz.com/edit/ignore-slash?file=src%2Fapp%2Fapp.module.ts
export function scriptMatcher(
  segments: UrlSegment[],
  group: UrlSegmentGroup,
  route: Route
): UrlMatchResult {
  const { length } = segments;
  if (length > 0) {
    const firstSegment = segments[0];
    if (firstSegment.path === "scripts" && length >= 2) {
      // candidate for match
      const idSegments = segments.slice(1); // skip prefix
      const idPaths = idSegments.map(mapPath);
      const mergedId = idPaths.join('/');// merge the splitted Id back together
      const pathSegment: UrlSegment = new UrlSegment(mergedId, { id: mergedId });
      return ({ consumed: segments, posParams: { path: pathSegment } });
    }
  }
  return null;
};

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'activities/:id', component: ActivityDetailComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'misc/:type', component: MiscComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'zones/:id', component: ZoneDetailComponent },
  { path: 'zones/:id/:sc', component: ScenesComponent },
  { path: 'behaviors/:id', component: BehaviorDetailAltComponent },
  { path: 'skills/:id', component: SkillComponent },
  { path: 'loot-table/:id', component: LootTableComponent },
  { path: 'objects', component: ObjectsComponent },
  { path: 'objects/types', component: ObjectTypesIndexComponent },
  { path: 'objects/types/:type', component: ObjectsByTypeComponent },
  { path: 'objects/components', component: ObjectComponentsIndexComponent },
  { path: 'objects/components/:component', component: ObjectsByComponentComponent },
  { path: 'objects/:id', component: ObjectDetailComponent },
  { path: 'objects/:id/:component', component: ObjectDetailComponent },
  { path: 'missions', component: MissionIndexComponent },
  { path: 'missions/search', component: MissionsComponent },
  { path: 'missions/detail/:id', component: MissionDetailComponent },
  { path: 'missions/:type', component: MissionsByTypeComponent },
  { path: 'missions/:type/:subtype', component: MissionsBySubtypeComponent },
  { path: 'scripts', component: ScriptsComponent },
  { matcher: scriptMatcher, component: ScriptFileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
