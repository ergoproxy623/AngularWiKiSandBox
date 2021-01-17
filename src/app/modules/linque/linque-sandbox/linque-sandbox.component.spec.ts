import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LinqueSandboxComponent} from './linque-sandbox.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBadImportConfig} from "../../../../test";
import {RouterTestingModule} from "@angular/router/testing";

describe('LinqueSandboxComponent', () => {
    let component: LinqueSandboxComponent;
    let fixture: ComponentFixture<LinqueSandboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ...TestBadImportConfig(), RouterTestingModule],
            declarations: [LinqueSandboxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinqueSandboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
