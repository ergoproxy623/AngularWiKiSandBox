import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArrowFuncComponent} from './arrow-func/arrow-func.component';
import {ArrowFuncRouting} from './arrow-func-routing';


@NgModule({
    declarations: [ArrowFuncComponent],
    imports: [
        CommonModule,
        ArrowFuncRouting
    ]
})
export class ArrowFuncModule {
}
