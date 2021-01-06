import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LootTableComponent } from './loot/loot-table/loot-table.component';
import { FactionsComponent } from './factions/factions.component';

import { ObjectTypesIndexComponent } from './types-index/types-index.component';
import { ObjectsByTypeComponent } from './by-type/by-type.component';
import { ObjectsByComponentComponent } from './by-component/by-component.component';
import { ObjectComponentsIndexComponent } from './components-index/components-index.component';
import { ObjectDetailComponent } from './detail/detail.component';
import { ObjectsComponent } from './objects.component';

const objectsRoutes = [
  { path: 'item-sets', loadChildren: () => import('./item-sets/item-sets.module').then(m => m.ItemSetsModule) },
  { path: 'factions', component: FactionsComponent, data: { title: "Factions" } },
  { path: 'loot/table/:id', component: LootTableComponent, data: { title: "LootTable" } },
  { path: 'types', component: ObjectTypesIndexComponent, data: { title: "Object Types" } },
  { path: 'types/:type', component: ObjectsByTypeComponent, data: { title: "Object Type" } },
  { path: 'types/:type/page/:page', component: ObjectsByTypeComponent, data: { title: "Object Type" } },
  { path: 'components', component: ObjectComponentsIndexComponent, data: { title: "Components" } },
  { path: 'components/:component', component: ObjectsByComponentComponent, data: { title: "Component" } },
  { path: 'components/:component/page/:page', component: ObjectsByComponentComponent, data: { title: "Component" } },
  { path: ':id', component: ObjectDetailComponent, data: { title: "Object" } },
  { path: ':id/:component', component: ObjectDetailComponent, data: { title: "Component - Object" } },
  { path: '', component: ObjectsComponent, data: { title: "Objects" } }
];

@NgModule({
  imports: [ RouterModule.forChild(objectsRoutes) ],
  exports: [ RouterModule ]
})
export class ObjectsRoutingModule { }
