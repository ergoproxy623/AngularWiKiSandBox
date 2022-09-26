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
class UserProfileControllerService extends __BaseService {
  static readonly updateUserProfilePath = '/profile/update';
  static readonly requestAccountUnlockPath = '/profile/account/status';
  static readonly getCurrentUserProfilePath = '/profile';
  static readonly eraseUserDataPath = '/profile/profile';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  updateUserProfileResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/profile/update`,
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
  }  updateUserProfile(): __Observable<null> {
    return this.updateUserProfileResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  requestAccountUnlockResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/profile/account/status`,
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
  }  requestAccountUnlock(): __Observable<null> {
    return this.requestAccountUnlockResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getCurrentUserProfileResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
  }  getCurrentUserProfile(): __Observable<null> {
    return this.getCurrentUserProfileResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  eraseUserDataResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/profile/profile`,
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
  }  eraseUserData(): __Observable<null> {
    return this.eraseUserDataResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserProfileControllerService {
}

export { UserProfileControllerService }
