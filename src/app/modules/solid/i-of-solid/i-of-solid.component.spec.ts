import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOfSolidComponent } from './i-of-solid.component';

describe('IOfSolidComponent', () => {
  let component: IOfSolidComponent;
  let fixture: ComponentFixture<IOfSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOfSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOfSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
