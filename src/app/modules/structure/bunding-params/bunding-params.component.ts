import {Component, OnInit} from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';
import {Router, ActivatedRoute} from '@angular/router';
import {GitService} from "../../../services/git-api/git.service";
import {first, withLatestFrom} from "rxjs/operators";

@Component({
    selector: 'app-bunding-params',
    templateUrl: './bunding-params.component.html',
    styleUrls: ['./bunding-params.component.scss']
})
export class BundingParamsComponent implements OnInit {
    cards: ICard[] = null;

    constructor(
        private route: ActivatedRoute,
        private gitService: GitService
    ) {
    }

    ngOnInit(): void {
        // const first$ = this.gitService.searchUsers('ergo');
        // first$.pipe(
        //     withLatestFrom(this.gitService.searchUsers("ergoproxy")),
        //     first()
        // );
        // first$.subscribe(r => {
        //     console.log(r);
        // });

        this.cards = [{
            title: 'Test Title',
            cardBody: 'Lorem 100',
            linkOne: 'url',
            linkTwo: 'url'
        }];
    }


    getParams() {
        this.route.params.subscribe(params => {
            console.log(params);
        });

    }
}
