import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccesOnTemplateComponent} from './acces-on-template/acces-on-template.component';
import {DomNodeRoutingModule} from './dom-node-routing.module';


@NgModule({
    declarations: [AccesOnTemplateComponent],
    imports: [
        CommonModule,
        DomNodeRoutingModule
    ]
})
export class DomNodeModule {
}
