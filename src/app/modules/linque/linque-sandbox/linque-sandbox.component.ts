import {Component, OnInit} from '@angular/core';
import * as E from 'linq';

@Component({
    selector: 'app-linque-sandbox',
    templateUrl: './linque-sandbox.component.html',
    styleUrls: ['./linque-sandbox.component.scss']
})
export class LinqueSandboxComponent implements OnInit {
    testArr = [1 ,2 ,3 ];
    constructor() {
    }

    ngOnInit(): void {
        this.linqRange();
        this.linqLast()

        const sad = E.from(this.testArr).contains( 2)
        console.log(sad);

    }

    linqLast() {
    const adssa = E.from(this.testArr).last()
    console.log(adssa);
    }

    linqRange() {
        const num =  E.range(1, 10).select(e => e === 5).toArray();
        console.log(num);
    }


}
