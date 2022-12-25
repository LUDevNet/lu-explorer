import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilModule } from '../util/util.module';

import { BehaviorDetailComponent } from './behavior-detail/behavior-detail.component';
import { BehaviorDetailAltComponent } from './behavior-detail-alt/behavior-detail-alt.component';
import { SkillComponent } from './skill/skill.component';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { DescriptionUiComponent } from './description-ui/description-ui.component';
import { TasksModule } from '../missions/tasks/tasks.module';
import { GuiModule } from '../gui/gui.module';
import { CooldownGroupDetailComponent } from './cooldowngroups/detail/detail.component';
import { CooldownGroupIndexComponent } from './cooldowngroups/index/index.component';

@NgModule({
  declarations: [
    BehaviorDetailComponent,
    BehaviorDetailAltComponent,
    SkillComponent,
    SkillsComponent,
    DescriptionUiComponent,
    CooldownGroupDetailComponent,
    CooldownGroupIndexComponent,
  ],
  imports: [
    CommonModule,
    GuiModule,
    UtilModule,
    SkillsRoutingModule,
    TasksModule,
  ]
})
export class SkillsModule { }
