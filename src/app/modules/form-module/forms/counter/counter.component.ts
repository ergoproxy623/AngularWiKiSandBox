import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    // provide for all project
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CounterComponent),
        multi: true
    }]
})

// implements interface ControlValueAccessor
export class CounterComponent implements  ControlValueAccessor {
    value = 0;
    disabled = false;
    private onChange = (value: any) => {};
    private onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    writeValue(outsideValue: number) {
        // получить из Forms API
        this.value = outsideValue;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    updateValue(insideValue: number) {
        this.value = insideValue; // html
        this.onChange(insideValue); // send for Forms API
        this.onTouched();
    }

}
