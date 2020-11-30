import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OOfSolidComponent } from './o-of-solid.component';

describe('OOfSolidComponent', () => {
  let component: OOfSolidComponent;
  let fixture: ComponentFixture<OOfSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OOfSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OOfSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
