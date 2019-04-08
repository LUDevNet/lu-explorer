import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscComponent } from './misc.component';
import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { BrickAttributesComponent } from './brick-attributes/brick-attributes.component';
import { BrickColorsComponent } from './brick-colors/brick-colors.component';
import { BrickIdsComponent } from './brick-ids/brick-ids.component';
import { EventGatingComponent } from './event-gating/event-gating.component';
import { FeatureGatingComponent } from './feature-gating/feature-gating.component';
import { LevelProgressionComponent } from './level-progression/level-progression.component';
import { ReleaseVersionComponent } from './release-version/release-version.component';
import { SubscriptionPricingComponent } from './subscription-pricing/subscription-pricing.component';

const miscRoutes = [
  { path: '', component: MiscComponent, children: [
    { path: 'acc-default-loc', component: AccDefaultLocComponent },
    { path: 'brick-attributes', component: BrickAttributesComponent },
    { path: 'brick-colors', component: BrickColorsComponent },
    { path: 'brick-ids', component: BrickIdsComponent },
    { path: 'event-gating', component: EventGatingComponent },
    { path: 'feature-gating', component: FeatureGatingComponent },
    { path: 'level-progression', component: LevelProgressionComponent },
    { path: 'release-version', component: ReleaseVersionComponent },
    { path: 'sub-pricing', component: SubscriptionPricingComponent },
    { path: '',   redirectTo: 'acc-default-loc', pathMatch: 'full' },
  ] }
];

@NgModule({
  imports: [ RouterModule.forChild(miscRoutes) ],
  exports: [ RouterModule ]
})
export class MiscRoutingModule { }
