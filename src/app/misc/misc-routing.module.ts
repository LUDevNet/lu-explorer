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
    { path: 'acc-default-loc', component: AccDefaultLocComponent, data: { title: "Default Accessory Locations"} },
    { path: 'brick-attributes', component: BrickAttributesComponent, data: { title: "Brick Attributes"} },
    { path: 'brick-colors', component: BrickColorsComponent, data: { title: "Brick Colors"} },
    { path: 'brick-ids', component: BrickIdsComponent, data: { title: "Brick IDs"} },
    { path: 'event-gating', component: EventGatingComponent, data: { title: "Event Gating"} },
    { path: 'feature-gating', component: FeatureGatingComponent, data: { title: "Feature Gating"} },
    { path: 'level-progression', component: LevelProgressionComponent, data: { title: "Level Progression"} },
    { path: 'release-version', component: ReleaseVersionComponent, data: { title: "Release Versions"} },
    { path: 'sub-pricing', component: SubscriptionPricingComponent, data: { title: "Subscription Pricing"} },
    { path: '',   redirectTo: 'acc-default-loc', pathMatch: 'full' },
  ] }
];

@NgModule({
  imports: [ RouterModule.forChild(miscRoutes) ],
  exports: [ RouterModule ]
})
export class MiscRoutingModule { }
