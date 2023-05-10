import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ZoneTestComponent } from './zone-test.component';

describe('ZoneTestComponent', () => {
  let component: ZoneTestComponent;
  let fixture: ComponentFixture<ZoneTestComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
