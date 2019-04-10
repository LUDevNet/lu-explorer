import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemSetDetailComponent } from './item-set-detail/item-set-detail.component';
import { ItemSetIndexComponent } from './item-set-index/item-set-index.component';

const itemSetsRoutes = [
  { path: ':id', component: ItemSetDetailComponent },
  { path: '', component: ItemSetIndexComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(itemSetsRoutes) ],
  exports: [ RouterModule ]
})
export class ItemSetsRoutingModule { }
