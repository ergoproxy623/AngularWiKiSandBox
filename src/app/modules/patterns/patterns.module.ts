import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatternsComponent} from './patterns/patterns.component';
import {PaternsRoutingModule} from './paterns-routing.module';


@NgModule({
    declarations: [PatternsComponent],
    imports: [
        CommonModule,
        PaternsRoutingModule
    ]
})
export class PatternsModule {
}
