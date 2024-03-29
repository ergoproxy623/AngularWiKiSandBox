import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllChartsComponent } from './all-charts.component';

describe('AllChartsComponent', () => {
  let component: AllChartsComponent;
  let fixture: ComponentFixture<AllChartsComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
