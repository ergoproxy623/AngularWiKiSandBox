import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss'],
    animations: [
        trigger('box', [
            state('start', style({background: 'red'})),
            state('end', style({background: 'green'})),
            state('middle', style({background: 'blue', 'border-radius': '50%'})),
            transition('start => end', animate(450)),
            transition('end => start', animate(550)),
            transition('middle <=> *', animate(550)),
        ])
    ]
})
export class AnimationComponent implements OnInit {
    state = 'start';

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.state = this.state === 'start' ? 'end' : 'start';
    }

    toggleMiddle() {
        this.state = 'middle'
    }
}
