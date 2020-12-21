import {Component, OnInit} from '@angular/core';
import * as E from 'linq';
import {GitService} from '../../../services/git-api/git.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../store/state/app.state';
import {selectUserGitList} from '../../../store/selectors/user.selectors';
import {Observable} from 'rxjs';
import {IUserDto} from '../../../classDTO/userDto/userDto';
import {GetUsersGit} from '../../../store/actions/user.action';
import * as R from 'ramda';
@Component({
    selector: 'app-linque-sandbox',
    templateUrl: './linque-sandbox.component.html',
    styleUrls: ['./linque-sandbox.component.scss']
})
export class LinqueSandboxComponent implements OnInit {
    testArr = [];
    usersGit$: Observable<IUserDto[]> = this.store.pipe(select(selectUserGitList));

    constructor(
        private gitService: GitService,
        private store: Store<IAppState>,
                ) {
    }

    ngOnInit(): void {
        this.store.dispatch(new GetUsersGit());
        this.linqRange();


        const sad = E.from(this.testArr).contains( 2);
        console.log(sad);
        this.gitService.getGithubUsers('proxy').subscribe( resp => {
            console.log(resp);
            const regex = /^.*(proxy).*$/;
            this.testArr = E.from( resp.items).where( (u: any) => u.login.match(regex) ).toArray();
            console.log(this.testArr);
            this.linqLast();
            this.ramda();
        });
    }

    ramda() {
        const incomplete = R.filter(R.where({complete: false}));
        const sortByDate = R.sortBy(R.prop('dueDate'));
        const sortByDateDescend = R.compose(R.reverse, sortByDate);
        const importantFields = R.project(['title', 'dueDate']);
        const groupByUser = R.partition(R.prop('username'));
        const activeByUser = R.compose(groupByUser, incomplete);
        const topDataAllUsers = R.compose(R.mapObj(R.compose(importantFields,  R.take(5), sortByDateDescend)), activeByUser);
        const results = topDataAllUsers(this.testArr);
        const gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
    }

    linqLast() {
    console.log(E.from(this.testArr).last());
    }

    linqRange() {
        const num =  E.range(1, 10).select(e => e === 5).toArray();
        console.log(num);
    }


}
