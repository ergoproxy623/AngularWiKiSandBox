/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityDTO } from '../models/activity-dto';

/**
 * Activity Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class ActivityReadControllerService extends __BaseService {
  static readonly findOneByIdUsingGETPath = '/public/activity/single/{activityId}';
  static readonly findAllByParentIdUsingGETPath = '/public/activity/{criterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches single activity using activity id
   * @param activityId activityId
   * @return OK
   */
  findOneByIdUsingGETResponse(activityId: number): __Observable<__StrictHttpResponse<ActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/activity/single/${encodeURIComponent(String(activityId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityDTO>;
      })
    );
  }
  /**
   * Fetches single activity using activity id
   * @param activityId activityId
   * @return OK
   */
  findOneByIdUsingGET(activityId: number): __Observable<ActivityDTO> {
    return this.findOneByIdUsingGETResponse(activityId).pipe(
      __map(_r => _r.body as ActivityDTO)
    );
  }

  /**
   * Fetches list of activities by nesting criterion id
   * @param criterionId criterionId
   * @return OK
   */
  findAllByParentIdUsingGETResponse(criterionId: number): __Observable<__StrictHttpResponse<Array<ActivityDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/activity/${encodeURIComponent(String(criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityDTO>>;
      })
    );
  }
  /**
   * Fetches list of activities by nesting criterion id
   * @param criterionId criterionId
   * @return OK
   */
  findAllByParentIdUsingGET(criterionId: number): __Observable<Array<ActivityDTO>> {
    return this.findAllByParentIdUsingGETResponse(criterionId).pipe(
      __map(_r => _r.body as Array<ActivityDTO>)
    );
  }
}

module ActivityReadControllerService {
}

export { ActivityReadControllerService }
