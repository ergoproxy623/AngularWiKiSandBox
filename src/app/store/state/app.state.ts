import {RouterReducerState} from '@ngrx/router-store';
import {initializeUserState, IUserState} from './user.state';
import {IConfigState, initializeConfigState} from './config.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

export const initializeAppState: IAppState = {
    users: initializeUserState,
    config: initializeConfigState,
};

export function getInitializeState(): IAppState {
    return initializeAppState;
}
