import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardItemComponent} from './base-elements/card-item/card-item.component';
import {FilterPipe} from '../modules/structure/pipes/filter.pipe';
import {ModalComponent} from './base-elements/modal/modal.component';
import {ResolveDirective} from '../directive/resolve.directive';


@NgModule({
    declarations: [
        CardItemComponent,
        FilterPipe,
        ModalComponent,
        ResolveDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardItemComponent,
        FilterPipe,
        ResolveDirective
    ],
})
export class SharedModule {

}
