import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMethodsComponent } from './test-methods/test-methods.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { TestFormComponent } from './test-form/test-form.component';



@NgModule({
  declarations: [
    TestMethodsComponent,
    TestServiceComponent,
    TestFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestsModule { }
