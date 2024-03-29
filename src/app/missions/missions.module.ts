import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UtilModule } from '../util/util.module';

import { MissionsSearchComponent } from './search/missions.component';
import { MissionsByTypeComponent } from './by-type/by-type.component';
import { MissionsBySubtypeComponent } from './by-subtype/by-subtype.component';
import { MissionDetailComponent } from './detail/detail.component';
import { MissionIndexComponent } from './index/index.component';
import { MissionRefListComponent } from './ref-list/ref-list.component';

import { TasksModule } from './tasks/tasks.module';
import { MissionsRoutingModule } from './missions-routing.module';
import { GroupIconComponent } from './group-icon/group-icon.component';
import { GuiModule } from '../gui/gui.module';

@NgModule({
  declarations: [
    MissionsSearchComponent,
    MissionsByTypeComponent,
    MissionsBySubtypeComponent,
    MissionDetailComponent,
    MissionIndexComponent,
    MissionRefListComponent,
    GroupIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilModule,
    TasksModule,
    MissionsRoutingModule,
    GuiModule,
  ]
})
export class MissionsModule { }
