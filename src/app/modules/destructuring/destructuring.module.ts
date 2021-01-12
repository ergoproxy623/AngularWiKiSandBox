import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructuringComponent} from './destructuring/destructuring.component';
import {DestructuringRoutingModule} from './destructuring-routing.module';


@NgModule({
    declarations: [DestructuringComponent],
    imports: [
        CommonModule,
        DestructuringRoutingModule
    ]
})
export class DestructuringModule {
}
