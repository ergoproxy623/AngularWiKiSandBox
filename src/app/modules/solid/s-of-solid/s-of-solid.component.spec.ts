import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SOfSolidComponent } from './s-of-solid.component';

describe('SOfSolidComponent', () => {
  let component: SOfSolidComponent;
  let fixture: ComponentFixture<SOfSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOfSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SOfSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
