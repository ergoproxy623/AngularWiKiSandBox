import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOfSolidComponent } from './l-of-solid.component';

describe('LOfSolidComponent', () => {
  let component: LOfSolidComponent;
  let fixture: ComponentFixture<LOfSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOfSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOfSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
