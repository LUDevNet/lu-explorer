import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { UtilModule } from '../util/util.module';

import { MiscComponent } from './misc.component';
import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { BrickColorsComponent } from './brick-colors/brick-colors.component';
import { EventGatingComponent } from './event-gating/event-gating.component';
import { ReleaseVersionComponent } from './release-version/release-version.component';
import { FeatureGatingComponent } from './feature-gating/feature-gating.component';
import { SubscriptionPricingComponent } from './subscription-pricing/subscription-pricing.component';
import { BrickIdsComponent } from './brick-ids/brick-ids.component';
import { BrickAttributesComponent } from './brick-attributes/brick-attributes.component';
import { LevelProgressionComponent } from './level-progression/level-progression.component';
import { ShadersComponent } from './shaders/shaders.component';
import { NewsAndTipsComponent } from './news-and-tips/news-and-tips.component';

@NgModule({
  declarations: [
    MiscComponent,
    AccDefaultLocComponent,
    BrickColorsComponent,
    EventGatingComponent,
    ReleaseVersionComponent,
    FeatureGatingComponent,
    SubscriptionPricingComponent,
    BrickIdsComponent,
    BrickAttributesComponent,
    LevelProgressionComponent,
    ShadersComponent,
    NewsAndTipsComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    MiscRoutingModule
  ],
  exports: [
    MiscComponent
  ]
})
export class MiscModule { }
