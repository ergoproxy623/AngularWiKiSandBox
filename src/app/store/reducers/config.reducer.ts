import {IConfigState, InitialConfigSate} from "../state/config.state";
import {ConfigAction, EConfigState} from "../actions/config.action";

export const ConfigReducer = (
    state = InitialConfigSate,
    action: ConfigAction
): IConfigState => {
    switch (action.type) {
        case EConfigState.GetConfigSuccess:
            return {
                ...state,
                config: action.payload
            };
        default:
            return state;
    }
};
