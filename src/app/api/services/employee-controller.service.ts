/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class EmployeeControllerService extends __BaseService {
  static readonly completeAndActivatePath = '/profile/completion';
  static readonly getCurrentUserProfileActiveStatusPath = '/profile/active/status';
  static readonly toggleActiveStatusPath = '/profile/active/status';
  static readonly removeEmployeeAccountPath = '/profile';
  static readonly getCurrentUserSteckbriefPath = '/profile/steckbrief';
  static readonly getCurrentUserProfileCompletionStatusPath = '/profile/completion/status';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  completeAndActivateResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/profile/completion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  completeAndActivate(): __Observable<null> {
    return this.completeAndActivateResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getCurrentUserProfileActiveStatusResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/active/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getCurrentUserProfileActiveStatus(): __Observable<null> {
    return this.getCurrentUserProfileActiveStatusResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  toggleActiveStatusResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/profile/active/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  toggleActiveStatus(): __Observable<null> {
    return this.toggleActiveStatusResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  removeEmployeeAccountResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  removeEmployeeAccount(): __Observable<null> {
    return this.removeEmployeeAccountResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getCurrentUserSteckbriefResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/steckbrief`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getCurrentUserSteckbrief(): __Observable<null> {
    return this.getCurrentUserSteckbriefResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getCurrentUserProfileCompletionStatusResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/completion/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getCurrentUserProfileCompletionStatus(): __Observable<null> {
    return this.getCurrentUserProfileCompletionStatusResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeControllerService {
}

export { EmployeeControllerService }
