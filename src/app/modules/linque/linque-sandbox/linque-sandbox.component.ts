import {Component, OnInit} from '@angular/core';
import * as E from 'linq';
import {GitService} from "../../../services/git-api/git.service";

@Component({
    selector: 'app-linque-sandbox',
    templateUrl: './linque-sandbox.component.html',
    styleUrls: ['./linque-sandbox.component.scss']
})
export class LinqueSandboxComponent implements OnInit {
    testArr = [];
    constructor(private gitService: GitService) {
    }

    ngOnInit(): void {
        this.linqRange();


        const sad = E.from(this.testArr).contains( 2)
        console.log(sad);
        this.gitService.getGithubUsers('proxy').subscribe( resp => {
            this.testArr = resp.items;

            this.linqLast();
        });
    }

    linqLast() {
    console.log(E.from(this.testArr).last());
    }

    linqRange() {
        const num =  E.range(1, 10).select(e => e === 5).toArray();
        console.log(num);
    }


}
