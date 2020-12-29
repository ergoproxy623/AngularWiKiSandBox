import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShedulerComponent } from './sheduler/sheduler.component';
import {SchedulerModule} from 'angular-calendar-scheduler';
import { ShedulerParentComponent } from './sheduler-parent/sheduler-parent.component';
import {ShedulerRoutingModule} from './shduler-routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import {CalendarModule} from 'angular-calendar';
import {FormsModule} from '@angular/forms';
import { BootstrapSchedulerComponent } from './bootstrap-scheduler/bootstrap-scheduler.component';


@NgModule({
  declarations: [
      ShedulerComponent,
      ShedulerParentComponent,
      BootstrapSchedulerComponent,
  ],
    imports: [
        CommonModule,
        ShedulerRoutingModule,
        SchedulerModule,
        CalendarModule,
        FormsModule,
        FlatpickrModule,
    ]
})
export class ShedulerMainModule { }
