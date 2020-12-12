import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanboxComponent } from './sanbox/sanbox.component';
import {SandboxRoutingModule} from './sanbox-routing.module';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [SanboxComponent],
    imports: [
        CommonModule,
        SandboxRoutingModule,
        MonacoEditorModule,
        FormsModule
    ]
})
export class SandboxJsModule { }
