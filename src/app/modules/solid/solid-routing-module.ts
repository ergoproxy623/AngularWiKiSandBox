import {RouterModule, Routes} from '@angular/router';
import {SOfSolidComponent} from './s-of-solid/s-of-solid.component';
import {NgModule} from '@angular/core';
import {OOfSolidComponent} from './o-of-solid/o-of-solid.component';
import {LOfSolidComponent} from './l-of-solid/l-of-solid.component';
import {IOfSolidComponent} from './i-of-solid/i-of-solid.component';
import {DOfSolidComponent} from './d-of-solid/d-of-solid.component';

const route: Routes = [
    {path: '', component: SOfSolidComponent},
    {path: 'o', component: OOfSolidComponent},
    {path: 'l', component: LOfSolidComponent},
    {path: 'i', component: IOfSolidComponent},
    {path: 'd', component: DOfSolidComponent},
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class SolidRoutingModule {
}
