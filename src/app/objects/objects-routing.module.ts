import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LootTableComponent } from './loot/loot-table/loot-table.component';

import { ObjectTypesIndexComponent } from './types-index/types-index.component';
import { ObjectsByTypeComponent } from './by-type/by-type.component';
import { ObjectsByComponentComponent } from './by-component/by-component.component';
import { ObjectComponentsIndexComponent } from './components-index/components-index.component';
import { ObjectDetailComponent } from './detail/detail.component';
import { ObjectsComponent } from './objects.component';
import { component_names } from '../../defs/components';
import { WhatsCoolItemsComponent } from './whats-cool-items/whats-cool-items.component';
import { RewardCodesComponent } from './reward-codes/reward-codes.component';
import { ObjectsSearchComponent } from './search/search.component';

const objectsRoutes = [
  { path: 'item-sets', loadChildren: () => import('./item-sets/item-sets.module').then(m => m.ItemSetsModule) },
  { path: 'factions', loadChildren: () => import('./factions/factions.module').then(m => m.FactionsModule) },
  {
    path: 'item-spotlight', component: WhatsCoolItemsComponent, data: {
      title: "What's Cool: Item Spotlight"
    }
  },
  {
    path: 'reward-codes', component: RewardCodesComponent, data: {
      title: "Reward codes"
    }
  },
  { path: 'loot/table/:id', component: LootTableComponent, data: { title: params => `LootTable #${params.id}` } },
  { path: 'search', component: ObjectsSearchComponent, data: { title: "Search" } },
  {
    path: 'types/:type', component: ObjectsByTypeComponent, data: {
      title: params => `Objects (${params['type']})`
    }
  },
  {
    path: 'types/:type/page/:page', component: ObjectsByTypeComponent, data: {
      title: params => `Objects (${params['type']}; Page ${params['page']})`
    }
  },
  { path: 'types', redirectTo: "/objects" },
  { path: 'components', component: ObjectComponentsIndexComponent, data: { title: "Components" } },
  {
    path: 'components/:component', component: ObjectsByComponentComponent, data: {
      title: params => `Objects (${component_names[params['component']]}Component)`
    }
  },
  {
    path: 'components/:component/page/:page', component: ObjectsByComponentComponent, data: {
      title: params => `Objects (${component_names[params['component']]}Component; Page ${params['page']})`
    }
  },
  { path: ':id', component: ObjectDetailComponent, data: { title: params => `Object #${params['id']}` } },
  {
    path: ':id/:component', component: ObjectDetailComponent, data: {
      title: params => `Object #${params['id']} (${component_names[params['component']]})`
    }
  },
  { path: '', component: ObjectsComponent, data: { title: "Objects" } }
];

@NgModule({
  imports: [RouterModule.forChild(objectsRoutes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
