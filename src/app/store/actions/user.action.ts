import {Action} from '@ngrx/store';
import {IUserDto} from '../../classDTO/userDto/userDto';


export enum EUserAction {
    GetUsers = '[Users] Get Users',
    GetUsersSuccess = '[Users] Get Users Success',
    GetUser = '[Users] Get Users',
    GetUserSuccess = '[Users] Get User Success',
}

export class GetUsers implements Action {
    public readonly type = EUserAction.GetUsers;
}

export class GetUsersSuccess implements Action {
    public  readonly  type = EUserAction.GetUsersSuccess;
    constructor(public payload: IUserDto[]) {
    }
}

export class GetUser implements Action {
    public readonly type = EUserAction.GetUser;
    constructor(public payload: number) {
    }
}

export class  GetUserSuccess implements Action {
    public readonly type  = EUserAction.GetUserSuccess;
    constructor(public payload: IUserDto) {
    }
}

export type UserAction = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess
