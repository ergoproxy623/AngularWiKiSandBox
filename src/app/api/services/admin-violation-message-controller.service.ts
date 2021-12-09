/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ViolationDefaultMessage } from '../models/violation-default-message';
import { ViolationDefaultMessageRequest } from '../models/violation-default-message-request';

/**
 * Admin Violation Message Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminViolationMessageControllerService extends __BaseService {
  static readonly findAllByLevelUsingGETPath = '/violations/messages';
  static readonly createOneUsingPOSTPath = '/violations/messages';
  static readonly updateOneUsingPUTPath = '/violations/messages/{messageId}';
  static readonly getUserImageUsingDELETE1Path = '/violations/messages/{messageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of violation default messages by domain level
   * @param level level
   * @return OK
   */
  findAllByLevelUsingGETResponse(level?: string): __Observable<__StrictHttpResponse<Array<ViolationDefaultMessage>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (level != null) __params = __params.set('level', level.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/violations/messages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ViolationDefaultMessage>>;
      })
    );
  }
  /**
   * Fetches list of violation default messages by domain level
   * @param level level
   * @return OK
   */
  findAllByLevelUsingGET(level?: string): __Observable<Array<ViolationDefaultMessage>> {
    return this.findAllByLevelUsingGETResponse(level).pipe(
      __map(_r => _r.body as Array<ViolationDefaultMessage>)
    );
  }

  /**
   * Creates new violation default message
   * @param request request
   * @return OK
   */
  createOneUsingPOSTResponse(request: ViolationDefaultMessageRequest): __Observable<__StrictHttpResponse<ViolationDefaultMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/violations/messages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ViolationDefaultMessage>;
      })
    );
  }
  /**
   * Creates new violation default message
   * @param request request
   * @return OK
   */
  createOneUsingPOST(request: ViolationDefaultMessageRequest): __Observable<ViolationDefaultMessage> {
    return this.createOneUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ViolationDefaultMessage)
    );
  }

  /**
   * Updates violation default message by id
   * @param params The `AdminViolationMessageControllerService.UpdateOneUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `messageId`: messageId
   *
   * @return OK
   */
  updateOneUsingPUTResponse(params: AdminViolationMessageControllerService.UpdateOneUsingPUTParams): __Observable<__StrictHttpResponse<ViolationDefaultMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/violations/messages/${encodeURIComponent(String(params.messageId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ViolationDefaultMessage>;
      })
    );
  }
  /**
   * Updates violation default message by id
   * @param params The `AdminViolationMessageControllerService.UpdateOneUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `messageId`: messageId
   *
   * @return OK
   */
  updateOneUsingPUT(params: AdminViolationMessageControllerService.UpdateOneUsingPUTParams): __Observable<ViolationDefaultMessage> {
    return this.updateOneUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ViolationDefaultMessage)
    );
  }

  /**
   * Deletes specified violation abuse message
   * @param messageId messageId
   */
  getUserImageUsingDELETE1Response(messageId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/violations/messages/${encodeURIComponent(String(messageId))}`,
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
   * Deletes specified violation abuse message
   * @param messageId messageId
   */
  getUserImageUsingDELETE1(messageId: number): __Observable<null> {
    return this.getUserImageUsingDELETE1Response(messageId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminViolationMessageControllerService {

  /**
   * Parameters for updateOneUsingPUT
   */
  export interface UpdateOneUsingPUTParams {

    /**
     * request
     */
    request: ViolationDefaultMessageRequest;

    /**
     * messageId
     */
    messageId: number;
  }
}

export { AdminViolationMessageControllerService }
