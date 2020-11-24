import {IUserDto} from '../../classDTO/userDto/userDto';

export interface IUserState {
    users: IUserDto[];
    selectedUser: IUserDto;
}

export const initialUsersState: IUserState = {
    users: null,
    selectedUser: null,
};
