import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy} from '@angular/router';
import {TestServiceComponent} from './modules/tests-module/tests/test-service/test-service.component';
import {TestMethodsComponent} from './modules/tests-module/tests/test-methods/test-methods.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
    {path: '', component: TestServiceComponent},
    {path: 'methode', component: TestMethodsComponent},
    {
        path: 'forms',
        loadChildren: () => import('./modules/form-module/forms.module').then(
            (m) => m.FormsModule ),
        canActivate: [AuthGuard],
    },
    {
        path: 'structure',
        loadChildren: () =>
            import('./modules/structure/structure.module').then(
                (m) => m.StructureModule),
       canActivateChild: [AuthGuard]
    },
    {
        path: 'snippets',
        loadChildren: () =>
            import('./modules/code-snippets/code-snippets.module').then(
                (m) => m.CodeSnippetsModule),
        canActivateChild: [AuthGuard]
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('./modules/charts/charts.module').then(
                (m) => m.ChartsModule),
        canActivateChild: [AuthGuard]
    },
    {
        path: 'dom',
        loadChildren: () =>
            import('./modules/dom-node/dom-node.module').then(
                (m) => m.DomNodeModule),
        canActivateChild: [AuthGuard]
    },
    {
        path: 'zone',
        loadChildren: () =>
            import('./modules/zone/zone.module').then(
                (m) => m.ZoneModule),
        canActivateChild: [AuthGuard]
    },
    {
        path: 'rxjs',
        loadChildren: () =>
            import('./modules/rx-js/rx-js.module').then(
                (m) => m.RxJsModule),
       canActivateChild: [AuthGuard]
    },
    {
        path: 'animation',
        loadChildren: () =>
            import('./modules/animation/animation.module').then(
                (m) => m.AnimationModule),
        canActivateChild: [AuthGuard]
    },
    {
        path: 'patterns',
        loadChildren: () =>
            import('./modules/patterns/patterns.module').then(
                (m) => m.PatternsModule),
        canActivateChild: [AuthGuard]
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
    },
    {
        path: 'sandbox',
        loadChildren: () => import('./modules/sandbox-js/sandbox-js.module').then( (m) => m.SandboxJsModule)
    },
    {
        path: 'solid',
        loadChildren: () => import('./modules/solid/solid.module').then( (m) => m.SolidModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
