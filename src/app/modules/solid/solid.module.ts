import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SOfSolidComponent} from './s-of-solid/s-of-solid.component';
import {OOfSolidComponent} from './o-of-solid/o-of-solid.component';
import {LOfSolidComponent} from './l-of-solid/l-of-solid.component';
import {IOfSolidComponent} from './i-of-solid/i-of-solid.component';
import {DOfSolidComponent} from './d-of-solid/d-of-solid.component';
import {SolidRoutingModule} from './solid-routing-module';


@NgModule({
    declarations: [SOfSolidComponent, OOfSolidComponent, LOfSolidComponent, IOfSolidComponent, DOfSolidComponent],
    imports: [
        CommonModule,
        SolidRoutingModule
    ]
})
export class SolidModule {
}
