import {Component, OnInit} from '@angular/core';
import * as E from 'linq';

@Component({
    selector: 'app-linque-sandbox',
    templateUrl: './linque-sandbox.component.html',
    styleUrls: ['./linque-sandbox.component.scss']
})
export class LinqueSandboxComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const num =  E.range(1, 10).select(e => e === 5).toArray();
        console.log(num);
    }

}
