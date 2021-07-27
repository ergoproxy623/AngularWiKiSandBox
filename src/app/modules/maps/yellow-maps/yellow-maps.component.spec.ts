import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowMapsComponent } from './yellow-maps.component';

describe('YellowMapsComponent', () => {
  let component: YellowMapsComponent;
  let fixture: ComponentFixture<YellowMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
