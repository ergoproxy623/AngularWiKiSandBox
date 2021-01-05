import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnippetsComponent} from './snippets/snippets.component';
import {CodeSnippetsRoutingModule} from "./code-snippets-routing.module";


@NgModule({
    declarations: [
        SnippetsComponent
    ],
    imports: [
        CommonModule,
        CodeSnippetsRoutingModule
    ]
})
export class CodeSnippetsModule {
}
