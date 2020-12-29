import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccesOnTemplateComponent} from './acces-on-template/acces-on-template.component';

const routes: Routes = [
    {path: '', component: AccesOnTemplateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DomNodeRoutingModule {
}
