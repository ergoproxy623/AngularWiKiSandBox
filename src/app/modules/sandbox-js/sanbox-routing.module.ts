import {RouterModule, Routes} from '@angular/router';
import {SanboxComponent} from './sanbox/sanbox.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    { path: '', component: SanboxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SandboxRoutingModule {
}
