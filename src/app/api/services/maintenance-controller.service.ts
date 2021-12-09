/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Maintenance Controller
 */
@Injectable({
  providedIn: 'root',
})
class MaintenanceControllerService extends __BaseService {
  static readonly reloadPostalCodesUsingGETPath = '/maintenance/postalCodes/reload';
  static readonly monitorRadarUsingGETPath = '/maintenance/radars/monitor';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Invokes task to refresh postal codes in location storage
   */
  reloadPostalCodesUsingGETResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/maintenance/postalCodes/reload`,
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
   * Invokes task to refresh postal codes in location storage
   */
  reloadPostalCodesUsingGET(): __Observable<null> {
    return this.reloadPostalCodesUsingGETResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Invokes task to process radars' calculation
   */
  monitorRadarUsingGETResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/maintenance/radars/monitor`,
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
   * Invokes task to process radars' calculation
   */
  monitorRadarUsingGET(): __Observable<null> {
    return this.monitorRadarUsingGETResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MaintenanceControllerService {
}

export { MaintenanceControllerService }
