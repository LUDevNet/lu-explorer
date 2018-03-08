import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSpaComponent }   from './github-spa/github-spa.component';
import { ZonesComponent }      from './zones/zones.component';
import { ZoneDetailComponent }  from './zone-detail/zone-detail.component';
import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'acc', component: AccDefaultLocComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'zones/:id', component: ZoneDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: GithubSpaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
