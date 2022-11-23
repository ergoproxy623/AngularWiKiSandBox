import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardItemComponent} from "./base-elements/card-item/card-item.component";
import {FilterPipe} from "../modules/structure/pipes/filter.pipe";
import {ModalComponent} from "./base-elements/modal/modal.component";
import {ResolveDirective} from "../directive/resolve.directive";
import {DisableControlDirective} from "../directive/disable-control.directive";
import {TimeoutDirective} from "../directive/timeout.directive";
import { BoldDirective } from "../directive/bold.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const Components = [
    CardItemComponent,
    TimeoutDirective,
    DisableControlDirective,
    ResolveDirective,
    FilterPipe,
    BoldDirective,
];

@NgModule({
    declarations: [
        ModalComponent,
        ...Components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...Components
    ],
})
export class SharedModule {

}
