import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PuntoJsComponent } from "./punto-js/punto-js.component";

const routes: Routes = [
    { path: "", component: PuntoJsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PuntoRoutingModule {
}
