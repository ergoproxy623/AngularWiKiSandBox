import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestsModule} from './modules/tests-module/tests/tests.module';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardItemComponent} from './shared/base-elements/card-item/card-item.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {SchedulerModule} from 'angular-calendar-scheduler';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {FlatpickrModule} from "angularx-flatpickr";

// tslint:disable-next-line:typedef
export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TestsModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        FlatpickrModule.forRoot(),
        NgbModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
