import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShedulerComponent} from './sheduler/sheduler.component';
import {ShedulerParentComponent} from './sheduler-parent/sheduler-parent.component';
import {BootstrapSchedulerComponent} from './bootstrap-scheduler/bootstrap-scheduler.component';

const routes: Routes = [
    { path: '', component: ShedulerParentComponent},
    // { path: 'parent', component: ShedulerComponent},
     { path: 'bootstrap-s', component: BootstrapSchedulerComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShedulerRoutingModule {
}
