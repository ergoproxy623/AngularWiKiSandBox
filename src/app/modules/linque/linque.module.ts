import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinqueSandboxComponent} from './linque-sandbox/linque-sandbox.component';
import {LinqRoutingModule} from './linque-sandbox/linq-routing.module';


@NgModule({
    declarations: [LinqueSandboxComponent],
    imports: [
        CommonModule,
        LinqRoutingModule
    ]
})
export class LinqueModule {
}
