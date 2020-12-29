import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-acces-on-template',
    templateUrl: './acces-on-template.component.html',
    styleUrls: ['./acces-on-template.component.scss']
})
export class AccesOnTemplateComponent implements OnInit {
    @ViewChild('firstNameInput', {static: false}) inputRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    focusOnInput(): void {
        this.inputRef.nativeElement.focus();
    }
}
