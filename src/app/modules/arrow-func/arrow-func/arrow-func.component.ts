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
        this.animals.every(a => a.includes('zzz'))
        this.forEachShow();
        this.curryingShow();
    }


    forEachShow(): void {
        this.animals.forEach( (a) => {
            a.includes('anal');
        })
       this.animals.forEach( a => {
           console.log(a);
            console.table([1, 2 ,3 ])
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
