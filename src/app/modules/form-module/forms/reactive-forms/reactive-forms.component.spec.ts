import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormsComponent} from './reactive-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FireServiceService} from '../../../../services/fire-service/fire-service.service';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../../../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFirestoreModule} from "@angular/fire/firestore";

describe('ReactiveFormsComponent', () => {
    let component: ReactiveFormsComponent;
    let fixture: ComponentFixture<ReactiveFormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReactiveFormsComponent],
            imports: [FormsModule, ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule,
                AngularFirestoreModule],
            providers: [FireServiceService]
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

    it('should contain Name control', () => {
        expect(component.createUserForm.contains('name')).toBeTruthy()
    });
});
