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
            // void => *
            transition(':enter', [
                style({opacity: 0}),
                animate('850ms ease-out')
            ]),
            // * => void
            transition(':leave', [
                style( {   transform: 'translate(0, 40%) scale(1.2)'} ),
                animate(750)
            ])
        ])
    ]
})
export class AnimationComponent  {
    state = 'start';
    visible = true;

    constructor() {
    }

    toggle(): void {
        this.state = this.state === 'start' ? 'end' : 'start';
    }

    toggleMiddle(): void {
        this.state = 'middle';
    }
}
