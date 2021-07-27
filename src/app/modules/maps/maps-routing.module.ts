import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YellowMapsComponent } from "./yellow-maps/yellow-maps.component";

const routes: Routes = [
    { path: "", component: YellowMapsComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MapsRoutingModule{}
