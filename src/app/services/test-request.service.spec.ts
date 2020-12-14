import { TestBed } from '@angular/core/testing';

import { TestRequestService } from './test-request.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TestRequestService', () => {
  let service: TestRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TestRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users list',   () => {
        service.getUsers().subscribe( responce => {
            expect(responce.data.length).toBeGreaterThanOrEqual(1);
        } );
  });
});
