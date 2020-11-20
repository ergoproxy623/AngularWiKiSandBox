import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsRoutingModule} from './forms-routing.module';



@NgModule({
  declarations: [ReactiveFormsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule
    ]
})
export class FormsModule { }
