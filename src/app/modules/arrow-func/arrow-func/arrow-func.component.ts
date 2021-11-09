import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-arrow-func',
    templateUrl: './arrow-func.component.html',
    styleUrls: ['./arrow-func.component.scss']
})
export class ArrowFuncComponent implements OnInit {

    animals: string[] = ['deer', 'bear', 'panda'];

    constructor() {
    }

    ngOnInit(): void {
        this.forEachShow();
        this.curryingShow();
    }


    forEachShow(): void {
       this.animals.forEach( a => {
           console.log(a);
       });
    }

    curryingShow(): void {
        function multiply(number1: number) {
            const pow = number1 ** number1;
            return (add: number) => pow + add;
        }

        const result = multiply(2)(4);
        console.log(result);
    }
}
