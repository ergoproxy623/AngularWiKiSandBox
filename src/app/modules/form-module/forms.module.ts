import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsComponent } from "./forms/reactive-forms/reactive-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsRoutingModule } from "./forms-routing.module";
import { TextMaskModule } from "angular2-text-mask";
import { CounterComponent } from "./forms/counter/counter.component";
import { MatIconModule } from "@angular/material/icon";
import { SharedModule } from "../../shared/shared.module";
import { ValueAccesorrFormGroupComponent } from "./forms/value-accesorr-form-group/value-accesorr-form-group.component";
import { ChieldFormGroupComponent } from "./forms/value-accesorr-form-group/chield-form-group/chield-form-group.component";

@NgModule({
    declarations: [
        ReactiveFormsComponent,
        CounterComponent,
        ValueAccesorrFormGroupComponent,
        ChieldFormGroupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        TextMaskModule,
        MatIconModule,
        SharedModule,
    ],
})
export class FormsModule {}
