import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOfSolidComponent } from './d-of-solid.component';

describe('DOfSolidComponent', () => {
  let component: DOfSolidComponent;
  let fixture: ComponentFixture<DOfSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOfSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOfSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
