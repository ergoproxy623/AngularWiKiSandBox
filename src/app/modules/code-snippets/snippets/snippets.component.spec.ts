import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsComponent } from './snippets.component';

jest.mock('')


describe('SnippetsComponent', () => {
  let component: SnippetsComponent;
  let fixture: ComponentFixture<SnippetsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
