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
class EmployeeRadarControllerService extends __BaseService {
  static readonly findRadarByUserIdPath = '/radar';
  static readonly createRadarPath = '/radar';
  static readonly toggleRadarPath = '/radar';
  static readonly toggleRadarNotificationsPath = '/radar/subcsriptions/{radarId}';
  static readonly checkIfExistsPath = '/radar/exists';
  static readonly getRadarForEditPath = '/radar/edit';
  static readonly deleteRadarPath = '/radar/{radarId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  findRadarByUserIdResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/radar`,
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
  }  findRadarByUserId(): __Observable<null> {
    return this.findRadarByUserIdResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  createRadarResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/radar`,
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
  }  createRadar(): __Observable<null> {
    return this.createRadarResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  toggleRadarResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/radar`,
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
  }  toggleRadar(): __Observable<null> {
    return this.toggleRadarResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param radarId undefined
   */
  toggleRadarNotificationsResponse(radarId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/radar/subcsriptions/${encodeURIComponent(String(radarId))}`,
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
   * @param radarId undefined
   */
  toggleRadarNotifications(radarId: number): __Observable<null> {
    return this.toggleRadarNotificationsResponse(radarId).pipe(
      __map(_r => _r.body as null)
    );
  }
  checkIfExistsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/radar/exists`,
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
  }  checkIfExists(): __Observable<null> {
    return this.checkIfExistsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getRadarForEditResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/radar/edit`,
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
  }  getRadarForEdit(): __Observable<null> {
    return this.getRadarForEditResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param radarId undefined
   */
  deleteRadarResponse(radarId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/radar/${encodeURIComponent(String(radarId))}`,
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
   * @param radarId undefined
   */
  deleteRadar(radarId: number): __Observable<null> {
    return this.deleteRadarResponse(radarId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeRadarControllerService {
}

export { EmployeeRadarControllerService }
