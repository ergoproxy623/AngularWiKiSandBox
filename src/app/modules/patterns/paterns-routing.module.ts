import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatternsComponent} from './patterns/patterns.component';
import {FactoryComponent} from './factory/factory.component';
import {PrototypeComponent} from './prototype/prototype.component';
import {SingletonComponent} from './singleton/singleton.component';
import {AdapterComponent} from './adapter/adapter.component';
import {DecoratorComponent} from './decorator/decorator.component';
import {FacadeComponent} from './facade/facade.component';

const routes: Routes = [
    { path: '', component: PatternsComponent },
    { path: 'factory', component: FactoryComponent },
    { path: 'prototype', component: PrototypeComponent },
    { path: 'singleton', component: SingletonComponent },
    { path: 'adapter', component: AdapterComponent },
    { path: 'decorator', component: DecoratorComponent },
    { path: 'facade', component: FacadeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class PaternsRoutingModule{

}
