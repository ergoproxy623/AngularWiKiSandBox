
import {EUserAction, UserAction} from '../actions/user.action';
import {initializeUserState, IUserState} from '../state/user.state';

export const UserReducer = (
    state = initializeUserState,
    action: UserAction
): IUserState => {
    switch (action.type) {
        case EUserAction.GetUsersSuccess:
            return {
                ...state,
                users: action.payload
            };
        case EUserAction.GetUserSuccess:
            return {
                ...state,
                selectedUser: action.payload
            };
        default:
            return state;
    }
};

