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
  { path: 'factions', component: FactionsComponent },
  { path: 'loot/table/:id', component: LootTableComponent },
  { path: 'types', component: ObjectTypesIndexComponent },
  { path: 'types/:type', component: ObjectsByTypeComponent },
  { path: 'types/:type/page/:page', component: ObjectsByTypeComponent },
  { path: 'components', component: ObjectComponentsIndexComponent },
  { path: 'components/:component', component: ObjectsByComponentComponent },
  { path: 'components/:component/page/:page', component: ObjectsByComponentComponent },
  { path: ':id', component: ObjectDetailComponent },
  { path: ':id/:component', component: ObjectDetailComponent },
  { path: '', component: ObjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(objectsRoutes) ],
  exports: [ RouterModule ]
})
export class ObjectsRoutingModule { }
