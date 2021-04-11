import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AsyncAwaitComponent } from "./async-await/async-await.component";
import { AsyncAwaitRoutingModule } from "./AsyncAwait-routing.module";


@NgModule({
    declarations: [
        AsyncAwaitComponent,
    ],
    imports: [
        CommonModule,
        AsyncAwaitRoutingModule
    ]
})
export class AsyncAwaitModule {
}
