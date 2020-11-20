import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PipesComponent} from './pipes.component';
import {TestRequestService} from '../../../services/test-request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {FilterPipe} from './filter.pipe';
import { MultiPipe } from './multi.pipe';
import {DebugElement} from "@angular/core";


describe('PipesComponent', () => {
    let component: PipesComponent;
    let fixture: ComponentFixture<PipesComponent>;
    let service: TestRequestService;
    let spy: jasmine.Spy;
    let de: DebugElement;
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [PipesComponent, FilterPipe, MultiPipe],
            providers: [ TestRequestService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PipesComponent);
        de = fixture.debugElement;
        component = fixture.componentInstance;
        service = de.injector.get(TestRequestService);
        spy = spyOn(service, 'getUsers').and.returnValue(of({count: 1, data: [{id: 1, name: 'Sem'}]}));

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

    it('should users arr get done', fakeAsync(() => {
        tick(400);
        expect(component.users).toBeTruthy();
    }));

    // it('should message return from observable', () => {
    //    component.content.subscribe( com => {
    //        expect(com).toBeDefined();
    //        expect(com).toBe('message');
    //    });
    // });

    it('should  call one time and update view',  () => {
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.all().length).toEqual(1);
        // expect(de.query(By.css))
    });
});
