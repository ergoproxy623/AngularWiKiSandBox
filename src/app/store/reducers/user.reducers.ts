import {InitialUsersState, IUserState} from '../state/users.state';
import {EUserAction, UserAction} from '../actions/user.action';

export const UserReducer = (
    state = InitialUsersState,
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

