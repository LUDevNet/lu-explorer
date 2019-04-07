import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscComponent } from './misc.component';

const miscRoutes = [
  { path: ':type', component: MiscComponent },
  { path: '', component: MiscComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(miscRoutes) ],
  exports: [ RouterModule ]
})
export class MiscRoutingModule { }
