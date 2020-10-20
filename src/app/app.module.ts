import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestsModule} from './modules/tests-module/tests/tests.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardItemComponent} from './shared/base-elements/card-item/card-item.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";

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
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
