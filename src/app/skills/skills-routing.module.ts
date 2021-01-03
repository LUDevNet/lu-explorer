import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BehaviorDetailAltComponent } from './behavior-detail-alt/behavior-detail-alt.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills.component';

const skillsRoutes: Routes = [
  { path: 'behaviors/:id', component: BehaviorDetailAltComponent },
  { path: ':id', component: SkillComponent },
  { path: '', component: SkillsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(skillsRoutes) ],
  exports: [ RouterModule ]
})
export class SkillsRoutingModule { }
