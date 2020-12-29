import {IUserDto} from '../../classDTO/userDto/userDto';

export interface IUserState {
    users: IUserDto[];
    usersGit: any[];
    selectedUser: IUserDto;
}

export const initializeUserState: IUserState = {
    users: [],
    usersGit: [],
    selectedUser: null,
};
