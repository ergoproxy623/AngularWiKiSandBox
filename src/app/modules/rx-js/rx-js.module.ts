import {RxJsRoutingModule} from './rx-js.routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RxJsComponent} from './rx-js/rx-js.component';
import {RxjsCanvasComponent} from './rxjs-canvas/rxjs-canvas.component';

@NgModule({
  declarations: [
      RxJsComponent,
      RxjsCanvasComponent
  ],
  imports: [
    CommonModule,
    RxJsRoutingModule
  ]
})
export class RxJsModule { }
