/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AbuseStatisticsDTO } from '../models/abuse-statistics-dto';
import { MonthlyStatisticsDTO } from '../models/monthly-statistics-dto';
import { AdvertisementStatisticsDTO } from '../models/advertisement-statistics-dto';
import { PairStatisticsDTO } from '../models/pair-statistics-dto';
import { UserStatisticsDTO } from '../models/user-statistics-dto';

/**
 * Admin Dashboard Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminDashboardControllerService extends __BaseService {
  static readonly findAbuseStatisticsUsingGETPath = '/dashboard/statistics/abuses';
  static readonly findChartValuesUsingGETPath = '/dashboard/statistics/chart';
  static readonly findEmployeeStatisticsUsingGETPath = '/dashboard/statistics/employees';
  static readonly findJobAdsStatisticsUsingGETPath = '/dashboard/statistics/jobs';
  static readonly findContactSupportStatisticsUsingGETPath = '/dashboard/statistics/supports';
  static readonly findUserStatisticsUsingGETPath = '/dashboard/statistics/users';
  static readonly findUserLockStatisticsUsingGETPath = '/dashboard/statistics/users/locks';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches aggregated abuses' statistics
   * @return OK
   */
  findAbuseStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<AbuseStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/abuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbuseStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated abuses' statistics
   * @return OK
   */
  findAbuseStatisticsUsingGET(): __Observable<AbuseStatisticsDTO> {
    return this.findAbuseStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as AbuseStatisticsDTO)
    );
  }

  /**
   * Fetches aggregated activities' chart
   * @param monthQuantity monthQuantity
   * @return OK
   */
  findChartValuesUsingGETResponse(monthQuantity?: number): __Observable<__StrictHttpResponse<Array<MonthlyStatisticsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (monthQuantity != null) __params = __params.set('monthQuantity', monthQuantity.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/chart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MonthlyStatisticsDTO>>;
      })
    );
  }
  /**
   * Fetches aggregated activities' chart
   * @param monthQuantity monthQuantity
   * @return OK
   */
  findChartValuesUsingGET(monthQuantity?: number): __Observable<Array<MonthlyStatisticsDTO>> {
    return this.findChartValuesUsingGETResponse(monthQuantity).pipe(
      __map(_r => _r.body as Array<MonthlyStatisticsDTO>)
    );
  }

  /**
   * Fetches aggregated employees' statistics
   * @return OK
   */
  findEmployeeStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<AdvertisementStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/employees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdvertisementStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated employees' statistics
   * @return OK
   */
  findEmployeeStatisticsUsingGET(): __Observable<AdvertisementStatisticsDTO> {
    return this.findEmployeeStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as AdvertisementStatisticsDTO)
    );
  }

  /**
   * Fetches aggregated job ads' statistics
   * @return OK
   */
  findJobAdsStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<AdvertisementStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/jobs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdvertisementStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated job ads' statistics
   * @return OK
   */
  findJobAdsStatisticsUsingGET(): __Observable<AdvertisementStatisticsDTO> {
    return this.findJobAdsStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as AdvertisementStatisticsDTO)
    );
  }

  /**
   * Fetches aggregated support requests' statistics
   * @return OK
   */
  findContactSupportStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<PairStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/supports`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PairStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated support requests' statistics
   * @return OK
   */
  findContactSupportStatisticsUsingGET(): __Observable<PairStatisticsDTO> {
    return this.findContactSupportStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as PairStatisticsDTO)
    );
  }

  /**
   * Fetches aggregated users' statistics
   * @return OK
   */
  findUserStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<UserStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated users' statistics
   * @return OK
   */
  findUserStatisticsUsingGET(): __Observable<UserStatisticsDTO> {
    return this.findUserStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as UserStatisticsDTO)
    );
  }

  /**
   * Fetches aggregated user lock/unlock operations' statistics
   * @return OK
   */
  findUserLockStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<PairStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dashboard/statistics/users/locks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PairStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches aggregated user lock/unlock operations' statistics
   * @return OK
   */
  findUserLockStatisticsUsingGET(): __Observable<PairStatisticsDTO> {
    return this.findUserLockStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as PairStatisticsDTO)
    );
  }
}

module AdminDashboardControllerService {
}

export { AdminDashboardControllerService }
