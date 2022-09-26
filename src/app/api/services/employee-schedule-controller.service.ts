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
class EmployeeScheduleControllerService extends __BaseService {
  static readonly findAllScheduledByUserIdPath = '/profile/schedule';
  static readonly updateUserSchedulePath = '/profile/schedule';
  static readonly updateUserScheduleDeleteCityPath = '/profile/schedule/{postalCode}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  findAllScheduledByUserIdResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/schedule`,
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
  }  findAllScheduledByUserId(): __Observable<null> {
    return this.findAllScheduledByUserIdResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  updateUserScheduleResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/profile/schedule`,
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
  }  updateUserSchedule(): __Observable<null> {
    return this.updateUserScheduleResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param postalCode undefined
   */
  updateUserScheduleDeleteCityResponse(postalCode: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/profile/schedule/${encodeURIComponent(String(postalCode))}`,
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
   * @param postalCode undefined
   */
  updateUserScheduleDeleteCity(postalCode: string): __Observable<null> {
    return this.updateUserScheduleDeleteCityResponse(postalCode).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeScheduleControllerService {
}

export { EmployeeScheduleControllerService }
