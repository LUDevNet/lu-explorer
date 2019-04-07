import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilModule } from '../util/util.module';

import { BehaviorComponent } from './behavior/behavior.component';
import { BehaviorDetailComponent } from './behavior-detail/behavior-detail.component';
import { BehaviorDetailAltComponent } from './behavior-detail-alt/behavior-detail-alt.component';
import { SkillComponent } from './skill/skill.component';

import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [
    BehaviorComponent,
    BehaviorDetailComponent,
    BehaviorDetailAltComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
