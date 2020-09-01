import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundingParamsComponent } from './bunding-params.component';

describe('BundingParamsComponent', () => {
  let component: BundingParamsComponent;
  let fixture: ComponentFixture<BundingParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundingParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundingParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
