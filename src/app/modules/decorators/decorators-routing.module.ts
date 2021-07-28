import { RouterModule, Routes } from "@angular/router";
import { YellowMapsComponent } from "../maps/yellow-maps/yellow-maps.component";
import { NgModule } from "@angular/core";
import { DecoratorsSandboxComponent } from "./decorators-sandbox/decorators-sandbox.component";

const routes: Routes = [
    { path: "", component: DecoratorsSandboxComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DecoratorsRoutingModule{}
