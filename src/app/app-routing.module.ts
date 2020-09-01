import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestServiceComponent} from './modules/tests-module/tests/test-service/test-service.component';
import {TestMethodsComponent} from './modules/tests-module/tests/test-methods/test-methods.component';
import {TestFormComponent} from './modules/tests-module/tests/test-form/test-form.component';

const routes: Routes = [
  {path: '', component: TestServiceComponent},
  {path: 'methode', component: TestMethodsComponent},
  {path: 'form', component: TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
