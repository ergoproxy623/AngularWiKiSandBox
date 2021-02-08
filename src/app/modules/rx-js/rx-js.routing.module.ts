import {RxJsComponent} from './rx-js/rx-js.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsCanvasComponent} from './rxjs-canvas/rxjs-canvas.component';

const routes: Routes = [
    { path: '',  component: RxJsComponent},
    { path: 'rx-canvas',  component: RxjsCanvasComponent},
];
@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxJsRoutingModule {

}
