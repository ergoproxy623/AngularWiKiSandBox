import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldFormGroupComponent } from './chield-form-group.component';

describe('ChieldFormGroupComponent', () => {
  let component: ChieldFormGroupComponent;
  let fixture: ComponentFixture<ChieldFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChieldFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieldFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
