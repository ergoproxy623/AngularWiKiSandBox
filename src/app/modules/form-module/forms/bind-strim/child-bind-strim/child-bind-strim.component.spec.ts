import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBindStrimComponent } from './child-bind-strim.component';

describe('ChildBindStrimComponent', () => {
  let component: ChildBindStrimComponent;
  let fixture: ComponentFixture<ChildBindStrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBindStrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBindStrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
