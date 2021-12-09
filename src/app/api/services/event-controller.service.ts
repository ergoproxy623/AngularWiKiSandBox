/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AdvertisementEventRequest } from '../models/advertisement-event-request';

/**
 * Event Controller
 */
@Injectable({
  providedIn: 'root',
})
class EventControllerService extends __BaseService {
  static readonly processOrderEventUsingPOSTPath = '/public/events/job-ads';
  static readonly processUserEventUsingPOSTPath = '/public/events/users';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Processes requested event (employee) to notify users' about expiration ad's expiration
   * @param request request
   */
  processOrderEventUsingPOSTResponse(request: AdvertisementEventRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/events/job-ads`,
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
   * Processes requested event (employee) to notify users' about expiration ad's expiration
   * @param request request
   */
  processOrderEventUsingPOST(request: AdvertisementEventRequest): __Observable<null> {
    return this.processOrderEventUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Processes requested event (job) to notify users' about expiration ad's expiration
   * @param request request
   */
  processUserEventUsingPOSTResponse(request: AdvertisementEventRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/events/users`,
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
   * Processes requested event (job) to notify users' about expiration ad's expiration
   * @param request request
   */
  processUserEventUsingPOST(request: AdvertisementEventRequest): __Observable<null> {
    return this.processUserEventUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EventControllerService {
}

export { EventControllerService }
