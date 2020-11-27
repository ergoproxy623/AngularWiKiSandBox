import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import {TestRequestService} from '../../../services/test-request.service';
import {FireServiceService} from '../../../services/fire-service/fire-service.service';
import * as momentTZ from 'moment-timezone';
import {IAppState} from '../../../store/state/app.state';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {select} from '@ngrx/store';
import {selectedUserList} from '../../../store/selectors/user.selectors';
import {GetUsers} from '../../../store/actions/user.action';
import {IUserDto} from '../../../classDTO/userDto/userDto';
import {IConfig} from "../../../classDTO/config/config,interface";
import {selectConfig, selectedConfig} from "../../../store/selectors/config.selectors";
import {GetConfig, SetConfig} from "../../../store/actions/config.action";
import {
    getMergedRoute,
    selectedRoute,
    selectFragmentUrl,
    selectSelectedId
} from "../../../store/selectors/router-state.selectors";
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

    users$: Observable<IUserDto[]> = this.store.pipe(select(selectedUserList));
    config$: Observable<IConfig> = this.store.pipe(select(selectedConfig));
    store$: Observable<any> = this.store.pipe(select(selectSelectedId));

    constructor(
        private usersService: TestRequestService,
        private fireService: FireServiceService,
        private store: Store<IAppState>,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.store.dispatch(new GetUsers());
        this.store.dispatch(new GetConfig());
        setTimeout( () => {
            this.store.dispatch(new SetConfig({adminName: 'Arthur', premissions: ['edit']}));
        }, 5000);
        this.store$.subscribe( s => {
            console.log(s);
        } )
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
