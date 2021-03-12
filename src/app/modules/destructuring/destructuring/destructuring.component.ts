import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-destructuring',
    templateUrl: './destructuring.component.html',
    styleUrls: ['./destructuring.component.scss']
})
export class DestructuringComponent implements OnInit {
    animal = {
        type: {
            mammal: {
                bear: {
                    age: 12
                },
                deer: {
                    age: 4
                }
            }
        }
    };

    animals = ['deer', 'bear', 'panda'];

    constructor() {
    }

    ngOnInit(): void {
        this.objDestructure();
        this.arrDestructure();
    }

    objDestructure() {
        const {bear, deer} = this.animal.type.mammal;
        console.log(bear, deer);
    }

    arrDestructure() {
        const [deer, bear, panda] = this.animals;
        console.log(deer, bear, panda);
    }

}
