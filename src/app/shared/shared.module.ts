import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardItemComponent} from "./base-elements/card-item/card-item.component";
import {FilterPipe} from "../modules/structure/pipes/filter.pipe";
import {ModalComponent} from "./base-elements/modal/modal.component";
import {ResolveDirective} from "../directive/resolve.directive";
import {DisableCOntrolDirective} from "../directive/disable-control.directive";
import {TimeoutDirective} from "../directive/timeout.directive";

const Components = [
    TimeoutDirective
];

@NgModule({
    declarations: [
        CardItemComponent,
        FilterPipe,
        ModalComponent,
        ResolveDirective,
        DisableCOntrolDirective,
        ...Components
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardItemComponent,
        FilterPipe,
        ResolveDirective,
        DisableCOntrolDirective,
        ...Components
    ],
})
export class SharedModule {

}
