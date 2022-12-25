import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BehaviorDetailAltComponent } from './behavior-detail-alt/behavior-detail-alt.component';
import { CooldownGroupDetailComponent } from './cooldowngroups/detail/detail.component';
import { CooldownGroupIndexComponent } from './cooldowngroups/index/index.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills.component';

const skillsRoutes: Routes = [
  { path: 'behaviors/:id', redirectTo: 'behaviors/:id/:id', pathMatch: 'full' },
  { path: 'behaviors/:id/:selected', component: BehaviorDetailAltComponent, data: { title: params => `Behavior #${params['id']}` } },
  { path: 'cooldowngroups', component: CooldownGroupIndexComponent, data: { title: "Cooldown Groups" } },
  { path: 'cooldowngroups/:id', component: CooldownGroupDetailComponent, data: { title: params => `Cooldown Group #${params['id']}` } },
  { path: ':id', component: SkillComponent, data: { title: params => `Skill #${params['id']}` } },
  { path: '', component: SkillsComponent, data: { title: "Skills" } }
];

@NgModule({
  imports: [RouterModule.forChild(skillsRoutes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
