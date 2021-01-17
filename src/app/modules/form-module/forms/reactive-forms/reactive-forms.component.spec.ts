import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormsComponent} from './reactive-forms.component';
import {FormBuilder} from '@angular/forms';
import {FireServiceService} from '../../../../services/fire-service/fire-service.service';
import {CounterComponent} from '../counter/counter.component';
import {BehaviorSubject} from 'rxjs';

describe('ReactiveFormsComponent', () => {
    let component: ReactiveFormsComponent;
    let fixture: ComponentFixture<ReactiveFormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReactiveFormsComponent, CounterComponent],
            providers: [FormBuilder, {
                provide: FireServiceService, useFactory: () => {
                    return {items: new BehaviorSubject([{name: 'John', age: 10}])};
                }
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveFormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should form init', () => {
        component.initForm();
        expect(component.createUserForm).toBeTruthy();
    });

    it('should contain Name control', () => {
        expect(component.createUserForm.contains('name')).toBeTruthy();
    });

    it('should resetForm reset end enable form ', () => {
        component.initForm();
        component.resetForm();
        expect(component.createUserForm.disabled).toBeFalse();
        expect(component.createUserForm.dirty).toBeFalse();
    });

    it('should disableAll make form disabled', () => {
        component.initForm();
        component.disableAll();
        expect(component.createUserForm.disabled).toBeTruthy();
    });

    it('should enableAll make form enabled', () => {
        component.initForm();
        component.disableAll();
        component.enableAll();
        expect(component.createUserForm.disabled).toBeFalse()
    });

});
