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
class AdminManageUsersControllerService extends __BaseService {
  static readonly processUserLockPath = '/management/lock/toggle';
  static readonly getUsersPath = '/management';
  static readonly generateImpersonationSessionPath = '/management/impersonation/requests';
  static readonly confirmUserRegistrationPath = '/management/registration/confirm';
  static readonly updateUserEmail1Path = '/management/email/update/{userId}';
  static readonly getUserByIdPath = '/management/{userId}';
  static readonly deleteByIdPath = '/management/{userId}';
  static readonly getAvailableAccountStatusesPath = '/management/statuses';
  static readonly getOrderedColumns1Path = '/management/ordered/columns';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  processUserLockResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/management/lock/toggle`,
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
  }  processUserLock(): __Observable<null> {
    return this.processUserLockResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getUsersResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/management`,
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
  }  getUsers(): __Observable<null> {
    return this.getUsersResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  generateImpersonationSessionResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/management/impersonation/requests`,
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
  }  generateImpersonationSession(): __Observable<null> {
    return this.generateImpersonationSessionResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  confirmUserRegistrationResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/management/registration/confirm`,
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
  }  confirmUserRegistration(): __Observable<null> {
    return this.confirmUserRegistrationResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId undefined
   */
  updateUserEmail1Response(userId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/management/email/update/${encodeURIComponent(String(userId))}`,
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
  }
  /**
   * @param userId undefined
   */
  updateUserEmail1(userId: number): __Observable<null> {
    return this.updateUserEmail1Response(userId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId undefined
   */
  getUserByIdResponse(userId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/management/${encodeURIComponent(String(userId))}`,
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
  }
  /**
   * @param userId undefined
   */
  getUserById(userId: number): __Observable<null> {
    return this.getUserByIdResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId undefined
   */
  deleteByIdResponse(userId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/management/${encodeURIComponent(String(userId))}`,
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
  }
  /**
   * @param userId undefined
   */
  deleteById(userId: number): __Observable<null> {
    return this.deleteByIdResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }
  getAvailableAccountStatusesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/management/statuses`,
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
  }  getAvailableAccountStatuses(): __Observable<null> {
    return this.getAvailableAccountStatusesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getOrderedColumns1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/management/ordered/columns`,
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
  }  getOrderedColumns1(): __Observable<null> {
    return this.getOrderedColumns1Response().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminManageUsersControllerService {
}

export { AdminManageUsersControllerService }
