import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatternsComponent} from './patterns/patterns.component';

const routes: Routes = [
    { path: '', component: PatternsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class PaternsRoutingModule{

}
