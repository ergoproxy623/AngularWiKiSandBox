import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStyleComponent } from './all-style.component';

describe('AllStyleComponent', () => {
  let component: AllStyleComponent;
  let fixture: ComponentFixture<AllStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
