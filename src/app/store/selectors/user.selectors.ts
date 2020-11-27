import {createSelector} from '@ngrx/store';
import {IUserState} from '../state/user.state';
import {IAppState} from '../state/app.state';

export const selectUsers = (state: IAppState) => state.users;

export const selectedUserList = createSelector(
  selectUsers,
    (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
    selectUsers,
    (state: IUserState) => state.selectedUser
);
