import {IConfig} from '../../classDTO/config/config,interface';

export interface IConfigState {
    config: IConfig;
}

export const InitialConfigSate: IConfigState = {
    config: null,
};
