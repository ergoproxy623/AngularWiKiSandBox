import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';
import { BundingParamsComponent } from './bunding-params/bunding-params.component';
import { StyleDirective } from './directives/style.directive';
import { DirectiveTestComponent } from './directives/directive-test/directive-test.component';
import {StructureRoutingModule} from './structure-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { StructureDirective } from './directives/structure.directive';
import { MultiPipe } from './pipes/multi.pipe';
import { NgRefTemplateComponent } from './ng-ref-template/ng-ref-template.component';
import { ChildRefComponent } from './ng-ref-template/child-ref/child-ref.component';




@NgModule({
  declarations: [
      SwitchComponent,
      NgForComponent,
      PipesComponent,
      BundingParamsComponent,
      StyleDirective,
      DirectiveTestComponent,
      StructureDirective,
      MultiPipe,
      NgRefTemplateComponent,
      ChildRefComponent,
  ],
    imports: [
        CommonModule,
        StructureRoutingModule,
        SharedModule,
    ]
})
export class StructureModule { }
