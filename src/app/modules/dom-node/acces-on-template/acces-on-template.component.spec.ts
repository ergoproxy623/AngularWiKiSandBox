import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesOnTemplateComponent } from './acces-on-template.component';

describe('AccesOnTemplateComponent', () => {
  let component: AccesOnTemplateComponent;
  let fixture: ComponentFixture<AccesOnTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesOnTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesOnTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
