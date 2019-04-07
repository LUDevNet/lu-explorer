import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V3fComponent } from './v3f/v3f.component';
import { PosComponent } from './pos/pos.component';
import { RotComponent } from './rot/rot.component';
import { ImageComponent } from './image/image.component';

import { UtilModule } from '../util/util.module';

@NgModule({
  declarations: [
    V3fComponent,
    PosComponent,
    RotComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    UtilModule
  ],
  exports: [
    V3fComponent,
    PosComponent,
    RotComponent,
    ImageComponent
  ]
})
export class SerializeModule { }
