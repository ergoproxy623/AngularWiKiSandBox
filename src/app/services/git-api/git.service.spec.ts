import { TestBed } from '@angular/core/testing';

import { GitService } from './git.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
const url = "https://api.github.com/search/users";
describe('GitService', () => {
  let service: GitService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GitService);
    controller =TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get users", () => {
      let users: any = [{}]
      service.searchUsers('test').subscribe((users) => {
          expect(users).toEqual(users)
      });
      controller.expectOne(url + 'q=test').flush(users)

  })
});
