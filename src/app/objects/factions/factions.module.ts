import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactionsGraphComponent } from './graph/factions.component';
import { ObjectsByFactionComponent } from './objects-by-faction/objects-by-faction.component';
import { FactionsRoutingModule } from './factions-routing.module';
import { UtilModule } from '../../util/util.module';
import { FactionIndexComponent } from './index/index.component';
import { GuiModule } from '../../gui/gui.module';


@NgModule({
  declarations: [
    FactionsGraphComponent,
    ObjectsByFactionComponent,
    FactionIndexComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    GuiModule,
    FactionsRoutingModule,
  ],
})
export class FactionsModule { }
