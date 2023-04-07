import {Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {TestRequestService} from '../../services/test-request.service';
import {Store} from '@ngrx/store';
import {EConfigState, GetConfig, GetConfigSuccess, SetConfig, SetConfigSuccess} from '../actions/config.action';
import {map, switchMap} from 'rxjs/operators';
import {ConfigServiceService} from '../../services/config-service.service';
import {IConfig} from '../../classDTO/config/config,interface';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';

@Injectable()
export class ConfigEffects {
    constructor(
        private userService: TestRequestService,
        private configService: ConfigServiceService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {
    }


    getConfig$ = createEffect(() =>  this.actions$.pipe(
        ofType<GetConfig>(EConfigState.GetConfig),
        switchMap( () => this.configService.getConfig() ),
        switchMap( (config: IConfig) => {
            return of (new GetConfigSuccess(config) );
        } )
    ));

    setConfig = createEffect(() =>  this.actions$.pipe(
        ofType<SetConfig>(EConfigState.SetConfig),
        map( action => action.payload ),
        switchMap( (config) => of( new SetConfigSuccess(config)) )
        ));

}
