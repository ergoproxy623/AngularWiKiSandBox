/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StatusDTO } from '../models/status-dto';
import { SingleValueStringRequest } from '../models/single-value-string-request';
import { AdminGroupedEmailDTO } from '../models/admin-grouped-email-dto';

/**
 * Admin Grouped Email Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminGroupedEmailControllerService extends __BaseService {
  static readonly getAllColumnNamesUsingGETPath = '/administrators/notifications/columns';
  static readonly getAllEmailsUsingGETPath = '/administrators/notifications/emails';
  static readonly createNewEmailUsingPOSTPath = '/administrators/notifications/emails';
  static readonly bindEmailWithGroupUsingPUTPath = '/administrators/notifications/emails/bindings/{email}/{group}';
  static readonly unbindEmailFromGroupUsingDELETEPath = '/administrators/notifications/emails/bindings/{email}/{group}';
  static readonly deleteEmailUsingDELETEPath = '/administrators/notifications/emails/{email}';
  static readonly getTableValuesUsingGETPath = '/administrators/notifications/table';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of all table columns' names
   * @return OK
   */
  getAllColumnNamesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<StatusDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/administrators/notifications/columns`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StatusDTO>>;
      })
    );
  }
  /**
   * Fetches list of all table columns' names
   * @return OK
   */
  getAllColumnNamesUsingGET(): __Observable<Array<StatusDTO>> {
    return this.getAllColumnNamesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<StatusDTO>)
    );
  }

  /**
   * Fetches list of all administrators' emails
   * @return OK
   */
  getAllEmailsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/administrators/notifications/emails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * Fetches list of all administrators' emails
   * @return OK
   */
  getAllEmailsUsingGET(): __Observable<Array<string>> {
    return this.getAllEmailsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Creates softly new admin email
   * @param request request
   * @return OK
   */
  createNewEmailUsingPOSTResponse(request: SingleValueStringRequest): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/administrators/notifications/emails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Creates softly new admin email
   * @param request request
   * @return OK
   */
  createNewEmailUsingPOST(request: SingleValueStringRequest): __Observable<string> {
    return this.createNewEmailUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Binds admin email (encoding is needed) with email group
   * @param params The `AdminGroupedEmailControllerService.BindEmailWithGroupUsingPUTParams` containing the following parameters:
   *
   * - `group`: group
   *
   * - `email`: email
   *
   * @return OK
   */
  bindEmailWithGroupUsingPUTResponse(params: AdminGroupedEmailControllerService.BindEmailWithGroupUsingPUTParams): __Observable<__StrictHttpResponse<Array<AdminGroupedEmailDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/administrators/notifications/emails/bindings/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.group))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdminGroupedEmailDTO>>;
      })
    );
  }
  /**
   * Binds admin email (encoding is needed) with email group
   * @param params The `AdminGroupedEmailControllerService.BindEmailWithGroupUsingPUTParams` containing the following parameters:
   *
   * - `group`: group
   *
   * - `email`: email
   *
   * @return OK
   */
  bindEmailWithGroupUsingPUT(params: AdminGroupedEmailControllerService.BindEmailWithGroupUsingPUTParams): __Observable<Array<AdminGroupedEmailDTO>> {
    return this.bindEmailWithGroupUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Array<AdminGroupedEmailDTO>)
    );
  }

  /**
   * Unbinds admin email (encoding is needed) from email group
   * @param params The `AdminGroupedEmailControllerService.UnbindEmailFromGroupUsingDELETEParams` containing the following parameters:
   *
   * - `group`: group
   *
   * - `email`: email
   *
   * @return OK
   */
  unbindEmailFromGroupUsingDELETEResponse(params: AdminGroupedEmailControllerService.UnbindEmailFromGroupUsingDELETEParams): __Observable<__StrictHttpResponse<Array<AdminGroupedEmailDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/administrators/notifications/emails/bindings/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.group))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdminGroupedEmailDTO>>;
      })
    );
  }
  /**
   * Unbinds admin email (encoding is needed) from email group
   * @param params The `AdminGroupedEmailControllerService.UnbindEmailFromGroupUsingDELETEParams` containing the following parameters:
   *
   * - `group`: group
   *
   * - `email`: email
   *
   * @return OK
   */
  unbindEmailFromGroupUsingDELETE(params: AdminGroupedEmailControllerService.UnbindEmailFromGroupUsingDELETEParams): __Observable<Array<AdminGroupedEmailDTO>> {
    return this.unbindEmailFromGroupUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as Array<AdminGroupedEmailDTO>)
    );
  }

  /**
   * Deletes admin email (encoding is needed)
   * @param email email
   */
  deleteEmailUsingDELETEResponse(email: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/administrators/notifications/emails/${encodeURIComponent(String(email))}`,
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
   * Deletes admin email (encoding is needed)
   * @param email email
   */
  deleteEmailUsingDELETE(email: string): __Observable<null> {
    return this.deleteEmailUsingDELETEResponse(email).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Fetches list of all emails for table
   * @return OK
   */
  getTableValuesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AdminGroupedEmailDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/administrators/notifications/table`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdminGroupedEmailDTO>>;
      })
    );
  }
  /**
   * Fetches list of all emails for table
   * @return OK
   */
  getTableValuesUsingGET(): __Observable<Array<AdminGroupedEmailDTO>> {
    return this.getTableValuesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AdminGroupedEmailDTO>)
    );
  }
}

module AdminGroupedEmailControllerService {

  /**
   * Parameters for bindEmailWithGroupUsingPUT
   */
  export interface BindEmailWithGroupUsingPUTParams {

    /**
     * group
     */
    group: string;

    /**
     * email
     */
    email: string;
  }

  /**
   * Parameters for unbindEmailFromGroupUsingDELETE
   */
  export interface UnbindEmailFromGroupUsingDELETEParams {

    /**
     * group
     */
    group: string;

    /**
     * email
     */
    email: string;
  }
}

export { AdminGroupedEmailControllerService }
