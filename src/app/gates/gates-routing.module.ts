import { NgModule } from "@angular/core";
import { Params, Route, RouterModule } from "@angular/router";
import { GateDetailComponent } from "./detail/detail.component";
import { GateIndexComponent } from "./index/index.component";

const gateRoutes: Route[] = [
    { path: '', component: GateIndexComponent, data: { title: "Feature Gates" } },
    { path: ':id', component: GateDetailComponent, data: { title: (params: Params) => `${params['id']} | Feature Gates` } }
];

@NgModule({
    imports: [RouterModule.forChild(gateRoutes)],
    exports: [RouterModule]
})
export class GatesRoutingModule { }
