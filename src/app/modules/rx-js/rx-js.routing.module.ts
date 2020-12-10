import { RxJsComponent } from './rx-js/rx-js.component';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { RxJsModule } from './rx-js.module';
const routes: Routes = [
    { path: '',  component: RxJsComponent}
]
@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxJsRoutingModule {

}
