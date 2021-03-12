import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksComponent } from './hooks/hooks.component';
import {AppModule} from "../../app.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [HooksComponent],
    imports: [
        CommonModule,
        AppModule,
        SharedModule
    ]
})
export class LifeCycleHooksModule { }
