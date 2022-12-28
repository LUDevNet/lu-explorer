import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateIndexComponent } from './index/index.component';
import { GatesRoutingModule } from './gates-routing.module';
import { GateDetailComponent } from './detail/detail.component';
import { GuiModule } from '../gui/gui.module';
import { UtilModule } from '../util/util.module';

@NgModule({
  declarations: [
    GateIndexComponent,
    GateDetailComponent,
  ],
  imports: [
    CommonModule,
    GatesRoutingModule,
    GuiModule,
    UtilModule,
  ]
})
export class GatesModule { }
