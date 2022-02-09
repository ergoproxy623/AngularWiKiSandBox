import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRefTemplateComponent } from './ng-ref-template.component';

describe('NgRefTemplateComponent', () => {
  let component: NgRefTemplateComponent;
  let fixture: ComponentFixture<NgRefTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRefTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRefTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
