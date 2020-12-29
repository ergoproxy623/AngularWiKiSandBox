import {Component, NgZone, OnInit} from '@angular/core';

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
        this.zone.run(() => {
            this.updateBox( event.clientX + 100, event.clientY + 100);
        });
        window.document.removeEventListener('mousemove', this.mouseMove);
    }

    updateBox(x, y) {
        this.div.setAttribute('style', `top: ${x}px; left: ${y}px`);
        this.div = null;
    }

    mouseDown(event) {
        this.div = event.target;
        console.log(this.div);
        this.zone.runOutsideAngular(() => {
            window.document.addEventListener('mousemove', this.mouseMove.bind(this));
        });
    }

    mouseMove(event) {
        event.preventDefault();
        this.div.setAttribute('style', `top: ${event.clientY + 100}px`);
        this.div.setAttribute('y', event.clientX + 100 + 'px');
    }
}
