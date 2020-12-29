import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LinqueSandboxComponent} from './linque-sandbox.component';

const routes: Routes = [
    { path: '', component: LinqueSandboxComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LinqRoutingModule {}
