import { Component, OnInit } from "@angular/core";
import { GitService } from "../../../services/git-api/git.service";

@Component({
    selector: "app-async-await",
    templateUrl: "./async-await.component.html",
    styleUrls: ["./async-await.component.scss"]
})
export class AsyncAwaitComponent implements OnInit {

    constructor(
        private getService: GitService
    ) {
    }

    ngOnInit(): void {
        this.getData();
    }

    async getData() {
        await this.getGit1();
        // await this.getGit2();
        await this.getGit3();
    }

    async getGit1() {
        const response = await this.getService.getGithubUsersToPromise("ergo");
        console.log(1, response);
    }

    async getGit2() {
        const response = await this.getService.getGithubUsersToPromise("ergoproxy623");
        console.log(2, response);
    }


    async getGit3() {
        const response = await this.getService.getGithubUsersToPromise("sun11");
        console.log(3, response);
    }

}
