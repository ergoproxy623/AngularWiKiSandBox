/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityDTO } from '../models/activity-dto';
import { ActivityModifyRequest } from '../models/activity-modify-request';
import { ToggleRequest } from '../models/toggle-request';

/**
 * Activity Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class ActivityModifyControllerService extends __BaseService {
  static readonly createUsingPOSTPath = '/activity';
  static readonly updateUsingPUTPath = '/activity/{activityId}';
  static readonly deleteUsingDELETEPath = '/activity/{activityId}';
  static readonly toggleUsingPATCHPath = '/activity/{activityId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates activity
   * @param request request
   * @return OK
   */
  createUsingPOSTResponse(request: ActivityModifyRequest): __Observable<__StrictHttpResponse<ActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/activity`,
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
   * Creates activity
   * @param request request
   * @return OK
   */
  createUsingPOST(request: ActivityModifyRequest): __Observable<ActivityDTO> {
    return this.createUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ActivityDTO)
    );
  }

  /**
   * Updates activity using activity id
   * @param params The `ActivityModifyControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `activityId`: activityId
   *
   * @return OK
   */
  updateUsingPUTResponse(params: ActivityModifyControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<ActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/activity/${encodeURIComponent(String(params.activityId))}`,
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
   * Updates activity using activity id
   * @param params The `ActivityModifyControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `activityId`: activityId
   *
   * @return OK
   */
  updateUsingPUT(params: ActivityModifyControllerService.UpdateUsingPUTParams): __Observable<ActivityDTO> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ActivityDTO)
    );
  }

  /**
   * Deletes (physical) activity using activity id
   * @param activityId activityId
   */
  deleteUsingDELETEResponse(activityId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/activity/${encodeURIComponent(String(activityId))}`,
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
   * Deletes (physical) activity using activity id
   * @param activityId activityId
   */
  deleteUsingDELETE(activityId: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(activityId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Enables/disables activity using activity id
   * @param params The `ActivityModifyControllerService.ToggleUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `activityId`: activityId
   *
   * @return OK
   */
  toggleUsingPATCHResponse(params: ActivityModifyControllerService.ToggleUsingPATCHParams): __Observable<__StrictHttpResponse<ActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/activity/${encodeURIComponent(String(params.activityId))}`,
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
   * Enables/disables activity using activity id
   * @param params The `ActivityModifyControllerService.ToggleUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `activityId`: activityId
   *
   * @return OK
   */
  toggleUsingPATCH(params: ActivityModifyControllerService.ToggleUsingPATCHParams): __Observable<ActivityDTO> {
    return this.toggleUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as ActivityDTO)
    );
  }
}

module ActivityModifyControllerService {

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {

    /**
     * request
     */
    request: ActivityModifyRequest;

    /**
     * activityId
     */
    activityId: number;
  }

  /**
   * Parameters for toggleUsingPATCH
   */
  export interface ToggleUsingPATCHParams {

    /**
     * request
     */
    request: ToggleRequest;

    /**
     * activityId
     */
    activityId: number;
  }
}

export { ActivityModifyControllerService }
