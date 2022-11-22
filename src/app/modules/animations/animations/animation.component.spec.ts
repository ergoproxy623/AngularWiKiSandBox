import { ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimationComponent} from './animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AnimationComponent', () => {
    let component: AnimationComponent;
    let fixture: ComponentFixture<AnimationComponent>;

    beforeEach((() => {
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

    it('should toggle change state',  () => {
        const state = component.state;
        component.toggle();
        expect(component.state !== state).toBeTruthy();
    });

    it('should toggleMiddle change state middle',  () => {
        component.toggleMiddle();
        expect(component.state).toContain('middle');
    });
});
