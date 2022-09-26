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
class EmployeeSearchControllerService extends __BaseService {
  static readonly getUsersProfileDTOsPath = '/public/search';
  static readonly getUsersProfileDTOs1Path = '/public/search/options';
  static readonly getEmployeeGeoLocationsPath = '/public/search/geo';
  static readonly findEmployeeProfilePath = '/public/search/{employeeId}';
  static readonly getNewAdvertisementsCountPath = '/public/search/posts/new/{agentId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userId undefined
   */
  getUsersProfileDTOsResponse(userId?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (userId != null) __params = __params.set('userId', userId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/search`,
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
  getUsersProfileDTOs(userId?: number): __Observable<null> {
    return this.getUsersProfileDTOsResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param dynamic undefined
   */
  getUsersProfileDTOs1Response(dynamic?: boolean): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (dynamic != null) __params = __params.set('dynamic', dynamic.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/search/options`,
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
   * @param dynamic undefined
   */
  getUsersProfileDTOs1(dynamic?: boolean): __Observable<null> {
    return this.getUsersProfileDTOs1Response(dynamic).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId undefined
   */
  getEmployeeGeoLocationsResponse(userId?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (userId != null) __params = __params.set('userId', userId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/search/geo`,
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
  getEmployeeGeoLocations(userId?: number): __Observable<null> {
    return this.getEmployeeGeoLocationsResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeSearchControllerService.FindEmployeeProfileParams` containing the following parameters:
   *
   * - `employeeId`:
   *
   * - `userId`:
   */
  findEmployeeProfileResponse(params: EmployeeSearchControllerService.FindEmployeeProfileParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.userId != null) __params = __params.set('userId', params.userId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/search/${encodeURIComponent(String(params.employeeId))}`,
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
   * @param params The `EmployeeSearchControllerService.FindEmployeeProfileParams` containing the following parameters:
   *
   * - `employeeId`:
   *
   * - `userId`:
   */
  findEmployeeProfile(params: EmployeeSearchControllerService.FindEmployeeProfileParams): __Observable<null> {
    return this.findEmployeeProfileResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param agentId undefined
   */
  getNewAdvertisementsCountResponse(agentId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/search/posts/new/${encodeURIComponent(String(agentId))}`,
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
   * @param agentId undefined
   */
  getNewAdvertisementsCount(agentId: number): __Observable<null> {
    return this.getNewAdvertisementsCountResponse(agentId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeSearchControllerService {

  /**
   * Parameters for findEmployeeProfile
   */
  export interface FindEmployeeProfileParams {
    employeeId: number;
    userId?: number;
  }
}

export { EmployeeSearchControllerService }
