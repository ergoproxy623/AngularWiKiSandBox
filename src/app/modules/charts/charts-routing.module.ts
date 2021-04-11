import {RouterModule, Routes} from "@angular/router";
import {AllChartsComponent} from "./all-charts/all-charts.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    { path: "", component: AllChartsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChartsRoutingModule {

}
