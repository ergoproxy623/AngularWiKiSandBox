import { RxJsModule } from "./modules/rx-js/rx-js.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestsModule } from "./modules/tests-module/tests/tests.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { adapterFactory } from "angular-calendar/date-adapters/moment";
import * as moment from "moment";
import { FlatpickrModule } from "angularx-flatpickr";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./store/reducers/deducers-map";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/effects/user.effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { ConfigEffects } from "./store/effects/config.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { ModalComponent } from "./shared/base-elements/modal/modal.component";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FireServiceService } from "./services/fire-service/fire-service.service";


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
    stateKey: "router", // state-slice name for routing state
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
        RxJsModule,
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
        AngularFirestoreModule,
        NgbModule,
    ],
    providers: [INTERCEPTOR_PROVIDER, FireServiceService],
    bootstrap: [AppComponent],
    entryComponents: [ModalComponent]
})
export class AppModule {
}
