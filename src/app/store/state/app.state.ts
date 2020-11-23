import {initialUsersState, IUserState} from './users.state';
import {IConfigState, initialConfigSate} from './config.state';
import {RouterReducerState} from '@ngrx/router-store';

export interface IAppState {
    routes?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

export const initialAppState = {
    users: initialUsersState,
    config: initialConfigSate,

};

export function getInitialState(): IAppState {
    return initialAppState;
}
