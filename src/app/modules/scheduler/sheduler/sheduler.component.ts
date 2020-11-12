import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

import {
    addPeriod,
    CalendarSchedulerEvent, CalendarSchedulerEventAction,
    DAYS_IN_WEEK, endOfPeriod,
    SchedulerEventTimesChangedEvent,
    SchedulerViewDay,
    SchedulerViewHour,
    SchedulerViewHourSegment, startOfPeriod, subPeriod,
} from 'angular-calendar-scheduler';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
} from 'angular-calendar';
import {Subject} from 'rxjs';
import {addMonths, endOfDay} from 'date-fns';


@Component({
  selector: 'app-sheduler',
  templateUrl: './sheduler.component.html',
  styleUrls: ['./sheduler.component.scss'],
})
export class ShedulerComponent {


}
