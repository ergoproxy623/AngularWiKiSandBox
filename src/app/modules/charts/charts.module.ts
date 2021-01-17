import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllChartsComponent} from './all-charts/all-charts.component';
import {ChartsRoutingModule} from './charts-routing.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';


@NgModule({
    declarations: [AllChartsComponent],
    imports: [
        CommonModule,
        ChartsRoutingModule,
        Ng2GoogleChartsModule
    ]
})
export class ChartsModule {
}
