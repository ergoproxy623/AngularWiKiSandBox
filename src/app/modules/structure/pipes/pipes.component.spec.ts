import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PipesComponent} from './pipes.component';
import {TestRequestService} from '../../../services/test-request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {FilterPipe} from './filter.pipe';
import {MultiPipe} from './multi.pipe';
import {DebugElement} from '@angular/core';
import {FireServiceService} from '../../../services/fire-service/fire-service.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {createSelector, StoreModule} from '@ngrx/store';
import {appReducers} from '../../../store/reducers/deducers-map';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../../../store/effects/user.effects';
import {ConfigEffects} from '../../../store/effects/config.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerStateConfig} from '../../../app.module';
import {RouterModule} from '@angular/router';
import {UserDTO} from '../../solid/i-of-solid/i-of-solid.component';
import {IAppState, initializeAppState} from '../../../store/state/app.state';
import {IUserState} from '../../../store/state/user.state';
import {MockStore} from "@ngrx/store/testing";

export const selectUsers = (state: IAppState) => state.users;

export const selectedUserList = createSelector(
    selectUsers,
    (state: IUserState) => state.users
);

describe('PipesComponent', () => {
    let component: PipesComponent;
    let fixture: ComponentFixture<PipesComponent>;
    let service: TestRequestService;
    let store: MockStore;
    let spy: jasmine.Spy;
    let de: DebugElement;

    const FirestoreStub = {
        collection: (name: string) => ({
            doc: (_id: string) => ({
                valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
                set: (_d: any) => new Promise((resolve, _reject) => resolve()),
            }),
        }),
    };

    class TestRecClass {
        getUsers(): Observable<UserDTO[]> {
            return new Observable<UserDTO[]>();
        }
    }

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([]),
                HttpClientTestingModule ,
                AngularFireModule.initializeApp(environment.firebase),
                StoreRouterConnectingModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([UserEffects, ConfigEffects]),
                StoreRouterConnectingModule.forRoot(routerStateConfig),
                StoreDevtoolsModule.instrument({
                    maxAge: 20,
                    logOnly: !environment.production,
                }), ],
            declarations: [PipesComponent, FilterPipe, MultiPipe],
            providers: [{provide: TestRequestService, useClass: TestRecClass },
                FireServiceService, ]
        })
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
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h3').textContent)
            .toContain('Pipes');
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
        expect(spy.calls.all().length).toBeGreaterThanOrEqual(1);
        // expect(de.query(By.css))
    });
});
