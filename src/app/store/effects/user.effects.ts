import {Injectable} from '@angular/core';
import {TestRequestService} from '../../services/test-request.service';
import {Actions, ofType} from '@ngrx/effects';
import {IAppState} from '../state/app.state';
import {Store} from '@ngrx/store';
import {EUserAction, GetUsers, GetUsersSuccess} from "../actions/user.action";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
  export class UserEffects {
    constructor(
        private userService: TestRequestService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {
    }

    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        switchMap( () => this.userService.getUsers() ),
        switchMap( (usersHttp) => of( new GetUsersSuccess(usersHttp.users))  )
    );
}

