import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoneTestComponent} from './zone-test/zone-test.component';
import {ZoneRoutingModule} from './zone-routing.module';


@NgModule({
    declarations: [ZoneTestComponent],
    imports: [
        CommonModule,
        ZoneRoutingModule
    ]
})
export class ZoneModule {
}
