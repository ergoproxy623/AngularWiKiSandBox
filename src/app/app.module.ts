import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestsModule} from './modules/tests-module/tests/tests.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {FlatpickrModule} from 'angularx-flatpickr';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms';


// tslint:disable-next-line:typedef
export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TestsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        FlatpickrModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}