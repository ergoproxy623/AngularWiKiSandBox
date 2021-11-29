import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFuncComponent } from './arrow-func.component';

describe('ArrowFuncComponent', () => {
  let component: ArrowFuncComponent;
  let fixture: ComponentFixture<ArrowFuncComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
