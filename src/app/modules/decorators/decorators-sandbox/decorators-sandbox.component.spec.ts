import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsSandboxComponent } from './decorators-sandbox.component';

describe('DecoratorsSandboxComponent', () => {
  let component: DecoratorsSandboxComponent;
  let fixture: ComponentFixture<DecoratorsSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorsSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
