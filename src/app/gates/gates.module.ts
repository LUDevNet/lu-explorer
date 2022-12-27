import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateIndexComponent } from './index/index.component';
import { GatesRoutingModule } from './gates-routing.module';
import { GateDetailComponent } from './detail/detail.component';
import { GuiModule } from '../gui/gui.module';

@NgModule({
  declarations: [
    GateIndexComponent,
    GateDetailComponent,
  ],
  imports: [
    CommonModule,
    GatesRoutingModule,
    GuiModule,
  ]
})
export class GatesModule { }
