import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksComponent } from './hooks/hooks.component';
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [HooksComponent],
    imports: [
        CommonModule,
        AppModule
    ]
})
export class LifeCycleHooksModule { }
