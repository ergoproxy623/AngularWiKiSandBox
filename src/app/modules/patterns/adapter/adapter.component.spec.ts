import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AdapterComponent } from './adapter.component';

describe('AdapterComponent', () => {
  let component: AdapterComponent;
  let fixture: ComponentFixture<AdapterComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
