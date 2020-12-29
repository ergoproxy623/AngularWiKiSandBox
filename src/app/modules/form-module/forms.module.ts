import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsComponent} from './forms/reactive-forms/reactive-forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsRoutingModule} from './forms-routing.module';
import {AngularFireModule} from '@angular/fire';
import {TextMaskModule} from 'angular2-text-mask';
import {CounterComponent} from './forms/counter/counter.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [ReactiveFormsComponent, CounterComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        AngularFireModule,
        TextMaskModule,
        MatIconModule
    ]
})
export class FormsModule {
}
