import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ZoneTestComponent} from './zone-test/zone-test.component';

const routes: Routes = [
    {path: '', component: ZoneTestComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ZoneRoutingModule {
}
