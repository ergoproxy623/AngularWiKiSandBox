import {Injectable} from '@angular/core';
import {TestRequestService} from '../../services/test-request.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {IAppState} from '../state/app.state';
import {Store} from '@ngrx/store';
import {
    EUserAction,
    GetUser,
    GetUsers,
    GetUsersGit,
    GetUsersGitSuccess,
    GetUsersSuccess,
    GetUserSuccess
} from '../actions/user.action';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select} from '@ngrx/store';
import { selectUserList} from '../selectors/user.selectors';
import {GitApiService} from "../../services/git-api/git.service";

@Injectable()
export class UserEffects {
    constructor(
        private userService: TestRequestService,
        private gitService: GitApiService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {
    }


    getUser$ = createEffect( () => this.actions$.pipe(
        ofType<GetUser>(EUserAction.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter( user => user['id'] === +id )[0];
            return of( new GetUserSuccess(selectedUser));
        })
    ));

    getUsers$ = createEffect( () => this.actions$.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        mergeMap( () => this.userService.getUsers().pipe(
                map( (users) => new GetUsersSuccess(users.data) )
            )
        ),
    ));

    getUsersGit$ = createEffect(() =>  this.actions$.pipe(
        ofType<GetUsersGit>(EUserAction.GetUsersGit),
        map( action => action.payload),
        mergeMap( (name) => this.gitService.getGithubUsers(name).pipe(
            map( (users) => new GetUsersGitSuccess(users.items))
        ) )
    ));
}


