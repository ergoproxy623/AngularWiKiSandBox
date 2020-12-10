import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsRoutingModule} from './forms-routing.module';
import {AngularFireModule} from "@angular/fire";



@NgModule({
  declarations: [ReactiveFormsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        AngularFireModule
    ]
})
export class FormsModule { }
