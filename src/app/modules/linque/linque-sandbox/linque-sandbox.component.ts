import { Component, OnInit } from "@angular/core";
import  E from "linq";
import { GitService } from "../../../services/git-api/git.service";
import { select, Store } from "@ngrx/store";
import { IAppState } from "../../../store/state/app.state";
import { selectUserGitList } from "../../../store/selectors/user.selectors";
import { Observable } from "rxjs";
import { IUserDto } from "../../../classDTO/userDto/userDto";
import { GetUsersGit } from "../../../store/actions/user.action";
import * as R from "ramda";
@Component({
    selector: "app-linque-sandbox",
    templateUrl: "./linque-sandbox.component.html",
    styleUrls: ["./linque-sandbox.component.scss"],
})
export class LinqueSandboxComponent implements OnInit {
    testArr = [];
    usersGit$: Observable<IUserDto[]> = this.store.pipe(
        select(selectUserGitList)
    );

    constructor(
        private gitService: GitService,
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        console.log(1);
        this.store.dispatch(new GetUsersGit("ergoproxy623"));
        this.linqRange();

        const sad = E.from(this.testArr).contains(2);
        console.log(sad);
        this.gitService.getGithubUsers("proxy").subscribe((resp) => {
            console.log(resp);
            const regex = /^.*(proxy).*$/;
            this.testArr = E.from(resp.items)
                .where((u: any) => u.login.match(regex))
                .toArray();
            console.log(this.testArr);
            this.linqLast();
            this.ramda();
            this.ramdaDrop();
        });
    }

    ramda() {
        const roles = R.filter(R.prop("type"));
        console.log(roles);
        const sortId = R.sortBy(R.prop("id"));
        console.log(sortId(this.testArr));
        const sortByIdDescend = R.compose(R.reverse, sortId);
        console.log(sortByIdDescend(this.testArr));
        const importantFields = R.project(["login", "id"]);
        console.log(importantFields(this.testArr));
        const groupByUser = R.partition(R.prop("login"));
        const activeByUser = R.compose(groupByUser, roles);
        const topDataAllUsers = R.compose(
            R.map(R.compose(importantFields, R.take(5), sortByIdDescend)),
            activeByUser
        );
        const results = topDataAllUsers(this.testArr);
        console.log(results);
        // const gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
    }

    linqLast() {
        console.log(E.from(this.testArr).last());
    }

    ramdaDrop() {
        console.log(this.testArr);

        console.log(R.drop(1, this.testArr))
    }

    linqRange() {
        const num = E.range(1, 10)
            .select((e) => e === 5)
            .toArray();
        console.log(num);
    }
}
