import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import {TestRequestService} from '../../../services/test-request.service';
import {FireServiceService} from '../../../services/fire-service/fire-service.service';
import * as momentTZ from 'moment-timezone';
@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
    tests = [0.12, 1.234234, 2.324534, 545645.5675, 7.23423];
    date = new Date();
    obj = {
        name: 'JSON',
        line: 2
    };

    users: any[] = [];
    p: Promise<string> = new Promise<string>( resolve => {
        setTimeout( () => {
            resolve('Promise done');
        }, 3000);
    });

    o: Observable<string> = new Observable<string>( observer => {
        setTimeout( () => {
            observer.next('Observable next for 5 sec.');
        }, 5000);
        setTimeout( () => {
            observer.next('Observable next for 7 sec.');
            observer.complete();
        }, 7000);
    });

    constructor(
        private usersService: TestRequestService,
        private fireService: FireServiceService,
        ) { }

    ngOnInit(): void {

        console.log(momentTZ.tz.guess());
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        this.usersService.getUsers().subscribe( res => {
            this.users = res.data;
        });

        this.fireService.items.subscribe( res => {
            console.log(res);
        });

    }

}
