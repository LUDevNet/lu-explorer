import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactionsGraphComponent } from './graph/factions.component';
import { ObjectsByFactionComponent } from './objects-by-faction/objects-by-faction.component';
import { FactionsRoutingModule } from './factions-routing.module';
import { UtilModule } from '../../util/util.module';
import { IndexComponent } from './index/index.component';
import { GuiModule } from '../../gui/gui.module';
import { D3GraphComponent } from './d3-graph/d3-graph.component';


@NgModule({
  declarations: [
    FactionsGraphComponent,
    ObjectsByFactionComponent,
    IndexComponent,
    D3GraphComponent,
  ],
  imports: [
    CommonModule,
    UtilModule,
    GuiModule,
    FactionsRoutingModule,
  ],
})
export class FactionsModule { }
