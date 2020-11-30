import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestsModule} from './modules/tests-module/tests/tests.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {FlatpickrModule} from 'angularx-flatpickr';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/deducers-map";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effects/user.effects";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {ConfigEffects} from "./store/effects/config.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MergedRouterStateSerializer} from "./store/reducers/router/merged-route-serialzer";
import {MonacoEditorModule} from "ngx-monaco-editor";


// tslint:disable-next-line:typedef
export function momentAdapterFactory() {
  return adapterFactory(moment);
}

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};

export const routerStateConfig = {
    stateKey: 'router', // state-slice name for routing state
};
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
        StoreModule.forRoot(appReducers),
        StoreRouterConnectingModule.forRoot(routerStateConfig),
        EffectsModule.forRoot([UserEffects, ConfigEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 20,
            logOnly: !environment.production,
        }),
        HttpClientModule,
        FlatpickrModule.forRoot(),
        MonacoEditorModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        NgbModule,
    ],
    providers: [INTERCEPTOR_PROVIDER,  {
        provide: RouterStateSerializer,
        useClass: MergedRouterStateSerializer,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
