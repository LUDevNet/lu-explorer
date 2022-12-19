import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { SerializeModule } from '../serialize/serialize.module';
import { UtilModule } from '../util/util.module';

import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';
import { LuzFileComponent } from './luz-file/luz-file.component';
import { LuzOverviewComponent } from './luz-overview/luz-overview.component';
import { LuzPathComponent } from './luz-path/luz-path.component';
import { LuzPathsComponent } from './luz-paths/luz-paths.component';
import { LuzPathWaypointComponent } from './luz-path-waypoint/luz-path-waypoint.component';
import { LvlFileComponent } from './lvl-file/lvl-file.component';
import { ObjInstanceComponent } from './obj-instance/obj-instance.component';
import { GuiModule } from '../gui/gui.module';

@NgModule({
  declarations: [
    ZoneIndexComponent,
    ZoneDetailComponent,
    ScenesComponent,
    LuzFileComponent,
    LuzOverviewComponent,
    LuzPathComponent,
    LuzPathsComponent,
    LuzPathWaypointComponent,
    LvlFileComponent,
    ObjInstanceComponent
  ],
  imports: [
    CommonModule,
    SerializeModule,
    UtilModule,
    ZonesRoutingModule,
    GuiModule
  ]
})
export class ZonesModule { }
