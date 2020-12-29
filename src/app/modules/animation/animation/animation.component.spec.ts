import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimationComponent} from './animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AnimationComponent', () => {
    let component: AnimationComponent;
    let fixture: ComponentFixture<AnimationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [AnimationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnimationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
