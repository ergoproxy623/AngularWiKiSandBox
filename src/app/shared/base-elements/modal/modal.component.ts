import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() title = 'Title';
    // tslint:disable-next-line:no-output-native
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
