import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DestructuringComponent } from './destructuring.component';

describe('DestructuringComponent', () => {
  let component: DestructuringComponent;
  let fixture: ComponentFixture<DestructuringComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructuringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
