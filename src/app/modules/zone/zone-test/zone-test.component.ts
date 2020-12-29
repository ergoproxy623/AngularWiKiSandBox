import {Component, NgZone, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-zone-test',
    templateUrl: './zone-test.component.html',
    styleUrls: ['./zone-test.component.scss']
})
export class ZoneTestComponent implements OnInit {
    div: any;
    constructor(private zone: NgZone) {
    }

    ngOnInit(): void {
    }


    mouseUp(event) {
        console.log(event);
        this.zone.run(() => {
            this.updateBox( event.clientX, event.clientY);
        });
        window.document.removeEventListener('mousemove', this.mouseMove);
    }

    updateBox(x, y) {
        this.div.setAttribute('style', `transform: translate3d(${x}px, ${y}px, 0px);`);
        this.div = null;
    }

    mouseDown(event) {
        console.log(event);
        this.div = event.target;
        console.log(this.div);
        this.zone.runOutsideAngular(() => {
            window.document.addEventListener('mousemove', this.mouseMove.bind(this));
        });
    }

    mouseMove(event) {
        event.preventDefault();
        this.div.setAttribute('style', `transform: translate3d(${event.clientX}px, ${event.clientY}px, 0px`);
    }

    drop(event: CdkDragDrop<string[]>) {
        // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
