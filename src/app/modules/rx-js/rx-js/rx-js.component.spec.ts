/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxJsComponent } from './rx-js.component';

describe('RxJsComponent', () => {
  let component: RxJsComponent;
  let fixture: ComponentFixture<RxJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
