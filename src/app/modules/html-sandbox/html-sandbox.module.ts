import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSandboxRoutingModule } from "./html-sandbox-routing.module";
import { SandboxComponent } from './sandbox/sandbox.component';



@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
      HtmlSandboxRoutingModule
  ]
})
export class HtmlSandboxModule { }
