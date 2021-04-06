import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PuntoJsComponent } from "./punto-js/punto-js.component";
import { PuntoRoutingModule } from "./punto-routing.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [PuntoJsComponent],
    imports: [
        CommonModule,
        PuntoRoutingModule,
        ReactiveFormsModule
    ]
})
export class PuntoModule {
}
