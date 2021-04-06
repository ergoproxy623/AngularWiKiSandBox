import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoJsComponent } from './punto-js.component';

describe('PuntoJsComponent', () => {
  let component: PuntoJsComponent;
  let fixture: ComponentFixture<PuntoJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
