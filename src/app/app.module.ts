import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestsModule} from './modules/tests-module/tests/tests.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardItemComponent } from './shared/base-elements/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    CardItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
