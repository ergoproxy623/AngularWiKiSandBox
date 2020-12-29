import {RxJsRoutingModule} from './rx-js.routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RxJsComponent} from './rx-js/rx-js.component';

@NgModule({
  declarations: [
      RxJsComponent
  ],
  imports: [
    CommonModule,
    RxJsRoutingModule
  ]
})
export class RxJsModule { }
