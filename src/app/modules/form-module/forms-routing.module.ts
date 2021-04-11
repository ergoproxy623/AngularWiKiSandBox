import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReactiveFormsComponent} from './forms/reactive-forms/reactive-forms.component';
import {ValueAccesorrFormGroupComponent} from './forms/value-accesorr-form-group/value-accesorr-form-group.component';

const routes: Routes = [
    { path: '', component: ReactiveFormsComponent},
    { path: 'value-accessor', component: ValueAccesorrFormGroupComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormsRoutingModule {

}
