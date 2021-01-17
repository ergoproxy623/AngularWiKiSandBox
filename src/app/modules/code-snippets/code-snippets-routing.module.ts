import {RouterModule, Routes} from '@angular/router';
import {SnippetsComponent} from './snippets/snippets.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '' , component: SnippetsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CodeSnippetsRoutingModule {

}
