import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestServiceComponent} from './modules/tests-module/tests/test-service/test-service.component';
import {TestMethodsComponent} from './modules/tests-module/tests/test-methods/test-methods.component';

const routes: Routes = [
    {path: '', component: TestServiceComponent},
    {path: 'methode', component: TestMethodsComponent},
    {
        path: 'forms',
        loadChildren: () => import('./modules/form-module/forms.module').then(
            (m) => m.FormsModule )
    },
    {
        path: 'structure',
        loadChildren: () =>
            import('./modules/structure/structure.module').then(
                (m) => m.StructureModule)
    },
    {
        path: 'linq',
        loadChildren: () =>
            import('./modules/linque/linque.module').then(
                (m) => m.LinqueModule
            ),
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
    },
    {
        path: 'sheduler',
        loadChildren: () =>
            import('./modules/scheduler/sheduler-main.module').then(
                (m) => m.ShedulerMainModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
