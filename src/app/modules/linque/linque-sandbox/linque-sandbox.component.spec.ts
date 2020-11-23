import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinqueSandboxComponent } from './linque-sandbox.component';

describe('LinqueSandboxComponent', () => {
  let component: LinqueSandboxComponent;
  let fixture: ComponentFixture<LinqueSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinqueSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinqueSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
