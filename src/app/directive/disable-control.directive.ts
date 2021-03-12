import {Directive, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
  selector: '([formControlName], [formControl])[disabledControl]',
})
export class DisableCOntrolDirective {

    @Input() set disabledControl(state: boolean) {
        const action = state ? 'disable' : 'enable';
        if (this.ngControl?.control) {
            this.ngControl.control[action]();
        }

    }

    constructor(private readonly ngControl: NgControl) {}

    ngOnInit() {
        console.log(this.ngControl);
    }
}
