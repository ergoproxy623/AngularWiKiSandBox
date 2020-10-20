import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BundingParamsComponent} from './bunding-params/bunding-params.component';
import {DirectiveTestComponent} from './directives/directive-test/directive-test.component';

const routes: Routes = [
    { path: '', component: BundingParamsComponent},
    { path: 'directives', component: DirectiveTestComponent},
    { path: 'bunding', component: BundingParamsComponent},
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StructureRoutingModule {

}
