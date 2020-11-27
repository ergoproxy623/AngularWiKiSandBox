import {Injectable} from '@angular/core';
import {TestRequestService} from '../../services/test-request.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {IAppState} from '../state/app.state';
import {Store} from '@ngrx/store';
import {EUserAction, GetUser, GetUsers, GetUsersSuccess} from '../actions/user.action';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select} from '@ngrx/store';

@Injectable()
export class UserEffects {
    constructor(
        private userService: TestRequestService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {
    }

    // @Effect()
    // getUser$ = this.actions$.pipe(
    //     ofType<GetUser>(EUserAction.GetUser),
    //     map(action => action.payload),
    //     withLatestFrom(this.store.pipe(select(selectedUser))),
    //     switchMap(([id, users]) => {
    //         const selectedUser = users.filter( user => user.id === +id )[0];
    //         return of( new GetUsersSuccess(selectedUser));
    //     })
    // );

    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        mergeMap( () => this.userService.getUsers().pipe(
                map( (users) => new GetUsersSuccess(users.data) )
            )
        ),
    );
}

