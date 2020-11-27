import {Action} from '@ngrx/store';
import {IConfigState} from '../state/config.state';
import {IConfig} from "../../classDTO/config/config,interface";

export enum EConfigState {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success',
}

export class GetConfig implements Action {
    public readonly type = EConfigState.GetConfig;
}

export class GetConfigSuccess implements Action {
    public  readonly type = EConfigState.GetConfigSuccess;
    constructor(public payload: IConfig) {
    }
}

export type ConfigAction = GetConfig | GetConfigSuccess;
