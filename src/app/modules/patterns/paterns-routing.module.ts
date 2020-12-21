import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatternsComponent} from './patterns/patterns.component';
import {FactoryComponent} from './factory/factory.component';
import {PrototypeComponent} from "./prototype/prototype.component";

const routes: Routes = [
    { path: '', component: PatternsComponent },
    { path: 'factory', component: FactoryComponent },
    { path: 'prototype', component: PrototypeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class PaternsRoutingModule{

}
