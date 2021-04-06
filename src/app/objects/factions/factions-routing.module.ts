import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactionsGraphComponent } from './graph/factions.component';
import { ObjectsByFactionComponent } from './objects-by-faction/objects-by-faction.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { D3GraphComponent } from './d3-graph/d3-graph.component';

const factionsRoutes = [
  { path: 'graph', component: FactionsGraphComponent, data: { title: "Factions Graph" } },
  { path: 'graph/d3', component: D3GraphComponent, data: { title: "Factions Graph" } },
  { path: ':id', component: ObjectsByFactionComponent, data: { title: params => `Faction #${params['id']}` } },
  { path: '', component: IndexComponent, data: { title: "Factions" } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(factionsRoutes)
  ],
  exports: [RouterModule],
})
export class FactionsRoutingModule { }
