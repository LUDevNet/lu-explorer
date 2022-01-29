import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BehaviorDetailAltComponent } from './behavior-detail-alt/behavior-detail-alt.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills.component';

const skillsRoutes: Routes = [
  { path: 'behaviors/:id', redirectTo: 'behaviors/:id/:id', pathMatch: 'full' },
  { path: 'behaviors/:id/:selected', component: BehaviorDetailAltComponent, data: { title: params => `Behavior #${params['id']}` } },
  { path: ':id', component: SkillComponent, data: { title: params => `Skill #${params['id']}` } },
  { path: '', component: SkillsComponent, data: { title: "Skills" } }
];

@NgModule({
  imports: [ RouterModule.forChild(skillsRoutes) ],
  exports: [ RouterModule ]
})
export class SkillsRoutingModule { }
