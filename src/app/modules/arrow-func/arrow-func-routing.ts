import {RouterModule, Routes} from '@angular/router';
import {ArrowFuncComponent} from './arrow-func/arrow-func.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: '', component: ArrowFuncComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArrowFuncRouting {

}
