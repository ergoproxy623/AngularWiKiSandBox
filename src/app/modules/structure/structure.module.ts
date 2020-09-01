import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';
import { BundingParamsComponent } from './bunding-params/bunding-params.component';
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [SwitchComponent, NgForComponent, PipesComponent, BundingParamsComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class StructureModule { }
