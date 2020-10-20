import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestServiceComponent} from './modules/tests-module/tests/test-service/test-service.component';
import {TestMethodsComponent} from './modules/tests-module/tests/test-methods/test-methods.component';
import {TestFormComponent} from './modules/tests-module/tests/test-form/test-form.component';
import {StructureModule} from './modules/structure/structure.module';

const routes: Routes = [
    {path: '', component: TestServiceComponent},
    {path: 'methode', component: TestMethodsComponent},
    {path: 'form', component: TestFormComponent},
    {
        path: 'structure',
        loadChildren: () =>
            import('./modules/structure/structure.module').then(
                (m) => m.StructureModule)
    },
    {
        path: 'tests',
        loadChildren: () =>
            import('./modules/tests-module/tests/tests.module').then(
                (m) => m.TestsModule)
    },
    {
        path: 'style',
        loadChildren: () =>
            import('./modules/style-module/style-module.module').then(
                (m) => m.StyleModuleModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
