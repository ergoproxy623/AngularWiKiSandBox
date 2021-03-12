import { SharedModule } from './../../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnippetsComponent} from './snippets/snippets.component';
import {CodeSnippetsRoutingModule} from "./code-snippets-routing.module";
import { CardItemComponent } from 'src/app/shared/base-elements/card-item/card-item.component';


@NgModule({
    declarations: [
        SnippetsComponent
    ],
    imports: [
        CommonModule,
        CodeSnippetsRoutingModule,
        SharedModule
    ]
})
export class CodeSnippetsModule {
}
