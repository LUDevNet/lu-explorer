import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlMatcher, UrlMatchResult, Route, UrlSegmentGroup, UrlSegment } from '@angular/router';

import { ScriptFileComponent } from './script-file/script-file.component';
import { ScriptsComponent } from './scripts.component';

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
  if (length >= 1) {
    // candidate for match
    const idSegments = segments; // skip prefix .slice(1)
    const idPaths = idSegments.map(mapPath);
    const mergedId = idPaths.join('/');// merge the splitted Id back together
    const pathSegment: UrlSegment = new UrlSegment(mergedId, { id: mergedId });
    return ({ consumed: segments, posParams: { path: pathSegment } });
  }
  return null;
};

const scriptsRoutes = [
  { matcher: scriptMatcher, component: ScriptFileComponent, data: { title: "Script" } },
  { path: '', component: ScriptsComponent, data: { title: "Scripts" } },
];

@NgModule({
  imports: [ RouterModule.forChild(scriptsRoutes) ],
  exports: [ RouterModule ]
})
export class ScriptsRoutingModule { }
