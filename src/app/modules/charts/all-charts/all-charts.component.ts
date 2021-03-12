import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {from} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {GoogleChartInterface} from 'ng2-google-charts';

@Component({
    selector: 'app-all-charts',
    templateUrl: './all-charts.component.html',
    styleUrls: ['./all-charts.component.scss']
})
export class AllChartsComponent implements OnInit {

    public proceedsChart: GoogleChartInterface = {
        chartType: 'LineChart',
        dataTable: [],
        options: {},
    };

    constructor() {
    }

    ngOnInit(): void {
        this.initChartData(
            [
                {date: new Date(), data: 120},
                {date: new Date(), data: 22},
                {date: new Date(), data: 3},
                {date: new Date(), data: 3},
                {date: new Date(), data: 3}
            ],
            'data'
        );
    }


    initChartData(checks: any[], chartField): void {


        from(checks).pipe(
            map(chart => {
                const event = `point { size: 10; shape-type: circle; fill-color: #348555; visible: true }`;
                const eventTitle = '';
                return [moment(chart.date).format('MM-DD hh:mm:ss'), chart[chartField], 0, eventTitle, event];
            }),
            toArray()
        ).subscribe(arr => {
            if (arr && arr.length) {
                this.proceedsChart.dataTable = [
                    ['date', 'Количество', '', {type: 'string', role: 'tooltip'}, {type: 'string', role: 'style'}],
                    ...arr
                ];
                console.log(this.proceedsChart.dataTable);
            } else {
                this.proceedsChart.dataTable = [];
            }
        });


        const gridlineColor = '#EDEFF3';
        const textColor = '#52547C';

        this.proceedsChart.options = {
            hAxis: {gridlineColor, textColor},
            vAxis: {gridlineColor, textColor},
            legend: {position: 'none'},
            chartArea: {width: '80%'},
            tooltip: {trigger: 'selection'},
            colors: ['#3366cc', ''],
            fontSize: 12,
            height: 300
        };

        if (this.proceedsChart.component) {
            this.proceedsChart.component.draw();
        }
    }
}
