import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsRoutingModule} from './forms-routing.module';
import {AngularFireModule} from "@angular/fire";
import {TextMaskModule} from "angular2-text-mask";



@NgModule({
  declarations: [ReactiveFormsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        AngularFireModule,
        TextMaskModule
    ]
})
export class FormsModule { }
