import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindStrimComponent } from './bind-strim.component';

describe('BindStrimComponent', () => {
  let component: BindStrimComponent;
  let fixture: ComponentFixture<BindStrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindStrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindStrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
