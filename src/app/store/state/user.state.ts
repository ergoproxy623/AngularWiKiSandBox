import {IUserDto} from '../../classDTO/userDto/userDto';

export interface IUserState {
    users: IUserDto[];
    selectedUser: IUserDto;
}

export const initializeUserState: IUserState = {
    users: [],
    selectedUser: null,
};
