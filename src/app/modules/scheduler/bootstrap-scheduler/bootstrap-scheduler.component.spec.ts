import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSchedulerComponent } from './bootstrap-scheduler.component';

describe('BootstrapSchedulerComponent', () => {
  let component: BootstrapSchedulerComponent;
  let fixture: ComponentFixture<BootstrapSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
