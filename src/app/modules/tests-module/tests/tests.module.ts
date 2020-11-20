import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMethodsComponent } from './test-methods/test-methods.component';
import { TestServiceComponent } from './test-service/test-service.component';


@NgModule({
  declarations: [
    TestMethodsComponent,
    TestServiceComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TestsModule { }
