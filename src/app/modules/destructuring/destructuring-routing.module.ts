import {RouterModule, Routes} from '@angular/router';
import {DestructuringComponent} from './destructuring/destructuring.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: '', component: DestructuringComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DestructuringRoutingModule {

}
