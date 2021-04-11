import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
    selector: 'app-chield-form-group',
    templateUrl: './chield-form-group.component.html',
    styleUrls: ['./chield-form-group.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ChieldFormGroupComponent),
        multi: true
    }]
})
export class ChieldFormGroupComponent implements OnInit, ControlValueAccessor {
    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm() {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            age: [0]
        });
    }

    writeValue(val) {
        val && this.userForm.patchValue(val, {emitEvent: true});
    }

    registerOnChange(fn) {
        this.userForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    public onTouched: () => void = () => {};

    setDisabledState(isDisabled: boolean): void {
    }

}
