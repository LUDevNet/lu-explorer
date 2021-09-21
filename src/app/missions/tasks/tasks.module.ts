import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GuiModule } from '../../gui/gui.module';
import { UtilModule } from '../../util/util.module';
import { SerializeModule } from '../../serialize/serialize.module';

import { SmashTaskComponent } from './smash-task/smash-task.component';
import { ScriptTaskComponent } from './script-task/script-task.component';
import { ActivityTaskComponent } from './activity-task/activity-task.component';
import { CollectTaskComponent } from './collect-task/collect-task.component';
import { NpcTaskComponent } from './npc-task/npc-task.component';
import { EmoteTaskComponent } from './emote-task/emote-task.component';
import { ConsumableTaskComponent } from './consumable-task/consumable-task.component';
import { SkillTaskComponent } from './skill-task/skill-task.component';
import { ItemTaskComponent } from './item-task/item-task.component';
import { PoiTaskComponent } from './poi-task/poi-task.component';
import { MinigameTaskComponent } from './minigame-task/minigame-task.component';
import { InteractTaskComponent } from './interact-task/interact-task.component';
import { MissionTaskComponent } from './mission-task/mission-task.component';
import { ReputationTaskComponent } from './reputation-task/reputation-task.component';
import { PowerupTaskComponent } from './powerup-task/powerup-task.component';
import { PetTaskComponent } from './pet-task/pet-task.component';
import { RacingTaskComponent } from './racing-task/racing-task.component';
import { FlagTaskComponent } from './flag-task/flag-task.component';
import { PropertyTaskComponent } from './property-task/property-task.component';
import { DonationTaskComponent } from './donation-task/donation-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [
    SmashTaskComponent,
    ScriptTaskComponent,
    ActivityTaskComponent,
    CollectTaskComponent,
    NpcTaskComponent,
    EmoteTaskComponent,
    ConsumableTaskComponent,
    SkillTaskComponent,
    ItemTaskComponent,
    PoiTaskComponent,
    MinigameTaskComponent,
    InteractTaskComponent,
    MissionTaskComponent,
    ReputationTaskComponent,
    PowerupTaskComponent,
    PetTaskComponent,
    RacingTaskComponent,
    FlagTaskComponent,
    PropertyTaskComponent,
    DonationTaskComponent,
    TaskDetailComponent,
    TaskTableComponent
  ],
  imports: [
    CommonModule,
    GuiModule,
    UtilModule,
    SerializeModule,
    RouterModule.forChild([])
  ],
  exports: [
    TaskDetailComponent,
    TaskTableComponent
  ]
})
export class TasksModule { }
