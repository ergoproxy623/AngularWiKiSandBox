import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatternsComponent} from './patterns/patterns.component';
import {PaternsRoutingModule} from './paterns-routing.module';
import { FactoryComponent } from './factory/factory.component';
import { PrototypeComponent } from './prototype/prototype.component';


@NgModule({
    declarations: [PatternsComponent, FactoryComponent, PrototypeComponent],
    imports: [
        CommonModule,
        PaternsRoutingModule
    ]
})
export class PatternsModule {
}
