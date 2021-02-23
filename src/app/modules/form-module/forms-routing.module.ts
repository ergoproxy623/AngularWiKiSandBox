import { BindStrimComponent } from './forms/bind-strim/bind-strim.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReactiveFormsComponent} from './forms/reactive-forms/reactive-forms.component';

const routes: Routes = [
    { path: '', component: ReactiveFormsComponent},
    { path: 'bind-strim', component: BindStrimComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormsRoutingModule {

}
