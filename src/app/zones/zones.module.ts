import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { SerializeModule } from '../serialize/serialize.module';
import { UtilModule } from '../util/util.module';

import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';
import { LuzFileComponent } from './luz-file/luz-file.component';
import { LvlFileComponent } from './lvl-file/lvl-file.component';
import { ObjInstanceComponent } from './obj-instance/obj-instance.component';

@NgModule({
  declarations: [
    ZoneIndexComponent,
    ZoneDetailComponent,
    ScenesComponent,
    LuzFileComponent,
    LvlFileComponent,
    ObjInstanceComponent
  ],
  imports: [
    CommonModule,
    SerializeModule,
    UtilModule,
    ZonesRoutingModule
  ]
})
export class ZonesModule { }
