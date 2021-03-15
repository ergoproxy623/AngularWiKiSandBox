import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsyncAwaitComponent } from "./async-await/async-await.component";

const routes: Routes = [
    { path: "", component: AsyncAwaitComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AsyncAwaitRoutingModule {

}
