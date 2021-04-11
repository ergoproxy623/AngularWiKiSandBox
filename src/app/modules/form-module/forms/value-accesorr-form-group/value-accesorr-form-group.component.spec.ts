import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAccesorrFormGroupComponent } from './value-accesorr-form-group.component';

describe('ValueAccesorrFormGroupComponent', () => {
  let component: ValueAccesorrFormGroupComponent;
  let fixture: ComponentFixture<ValueAccesorrFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueAccesorrFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAccesorrFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
