import {Component, OnInit} from '@angular/core';
import {throwError} from "rxjs";

@Component({
    selector: 'app-snippets',
    templateUrl: './snippets.component.html',
    styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit {
    n1 = 445.67;
    n2 = 445.67;
    n3 = '445.67';
    n4 = 4;
    n5 = 5;

    constructor() {
    }

    ngOnInit(): void {
        this.mathFloor();
        this.exponentiation();
        this.stringToNumber();
        this.simplifyIf();
        this.callFunction();
        this.checkParams();
        this.changeChart();
        this.lineBreak();
        this.defaultValue();
        this.replaceAll();
    }

    mathFloor() {
        // # 1 Math.floor
        const n = 445.67;
        console.log(Math.floor(n));
        console.log(~~n);
    }

    exponentiation() {
        // # 2
        const n = 445.67;
        console.log(Math.pow(n, 3));
        console.log(n ** 3);
    }

    stringToNumber() {
        // # 3
        console.log(parseInt(this.n3));
        console.log(+this.n3); // if('3a') return NaN
    }

    simplifyIf() {
        // # 4
        if (this.n4 === 4) {
            console.log('#4');
        }
        this.n4 && console.log(this.n4);
    }

    numberTooString() {
        console.log(this.n5.toString());
        console.log(`${this.n5}`);
        console.log(String(this.n5));
    }

    callFunction() {
        if (this.n5 < this.n4) {
            this.mathFloor();
        } else {
            this.exponentiation();
        }

        (this.n5 < this.n4 ? this.mathFloor : this.exponentiation)();
    }

    checkParams() {
        this.showParams(7);
        this.showParamsAndError(7);
    }

    showParams(param) {
        if (!param) {
            throw new Error('empty');
        }
        console.log(param);
    }

    throwErr = () => {
        throw new Error('Error');
    }

    showParamsAndError(param: any = throwError('')) {
        console.log(param);
    }

    changeChart() {
        const str = 'string';
        console.log(str.charAt(2));
        console.log(str[2]);
    }

    lineBreak() {
        const line = `hi
        hello`;
        console.log(line);
    }

    defaultValue() {
        let n10 = 34;
        const result = n10 || false;

        console.log(result);
        n10 = undefined;
        console.log(result);
    }

    replaceAll() {
        const str = '+1+1+1+1';
        console.log(str.replace(/\+/g, '2'));
        // console.log(str.replaceAll('+', '2'));
        console.log(String.prototype);
    }
}
