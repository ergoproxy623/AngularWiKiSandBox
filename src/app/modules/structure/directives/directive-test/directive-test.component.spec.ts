import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTestComponent } from './directive-test.component';
import { GitService } from "../../../../services/git-api/git.service";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

describe('DirectiveTestComponent', () => {
  let component: DirectiveTestComponent;
  let fixture: ComponentFixture<DirectiveTestComponent>;
  let service;
  let gitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveTestComponent ],
        providers: [GitService, HttpClient, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(GitService)
    gitSpy = spyOn(service, 'searchUsers').and.returnValue(of([]))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call github service search users", () => {
        component.getUsers();
        expect(gitSpy.calls.any()).toBeTruthy()
  })
});
