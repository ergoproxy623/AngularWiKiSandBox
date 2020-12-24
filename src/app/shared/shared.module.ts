import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardItemComponent} from './base-elements/card-item/card-item.component';


@NgModule({
    declarations: [
        CardItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardItemComponent
    ],
})
export class SharedModule {

}
