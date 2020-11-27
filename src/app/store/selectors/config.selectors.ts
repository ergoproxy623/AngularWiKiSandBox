import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";
import {IConfigState} from "../state/config.state";

export const selectConfig = (state: IAppState) => state.config;

export const selectedConfig = createSelector(
    selectConfig,
    (state: IConfigState) => state.config
);
