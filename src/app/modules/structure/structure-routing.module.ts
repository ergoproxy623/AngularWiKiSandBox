import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BundingParamsComponent} from './bunding-params/bunding-params.component';
import {DirectiveTestComponent} from './directives/directive-test/directive-test.component';
import {PipesComponent} from './pipes/pipes.component';
import {UsersResolver} from '../../resolvers/users.resolver/users.resolver';
import { NgRefTemplateComponent } from "./ng-ref-template/ng-ref-template.component";

const routes: Routes = [
    { path: '', component: BundingParamsComponent},
    { path: 'directives', component: DirectiveTestComponent},
    { path: 'bunding', component: BundingParamsComponent},
    { path: 'ng-ref', component: NgRefTemplateComponent},
    { path: 'pipes', component: PipesComponent, resolve: { users: UsersResolver}},
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StructureRoutingModule {

}
