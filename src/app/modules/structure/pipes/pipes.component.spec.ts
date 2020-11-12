import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PipesComponent} from './pipes.component';
import {TestRequestService} from '../../../services/test-request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {FilterPipe} from './filter.pipe';
import { MultiPipe } from './multi.pipe';

describe('PipesComponent', () => {
    let component: PipesComponent;
    let fixture: ComponentFixture<PipesComponent>;
    let serviceStub: any;
    beforeEach(async(() => {
        serviceStub = {
            getContent: () => of('message')
        };
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [PipesComponent, FilterPipe, MultiPipe],
            providers: [TestRequestService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PipesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const el = fixture.nativeElement;
        const text = el.querySelector('h3');
        expect(text.textContent).toContain('Pipes');
    });

    it('should not empty tests arr', () => {
        expect(component.tests.length).toBeTruthy(5);
    });

    it('should users arr get done', async(() => {
        expect(component.users).toBeTruthy();
    }));

});
