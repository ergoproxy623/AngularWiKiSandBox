/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommonPagedRestResponseAbuseSimplifiedDTO } from '../models/common-paged-rest-response-abuse-simplified-dto';
import { AbuseExtendedDTO } from '../models/abuse-extended-dto';
import { AbuseCommandRequest } from '../models/abuse-command-request';
import { SingleValueStringResponseDTO } from '../models/single-value-string-response-dto';
import { AbuseAdminRequest } from '../models/abuse-admin-request';
import { StatusDTO } from '../models/status-dto';

/**
 * Admin Abuse Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminAbuseControllerService extends __BaseService {
  static readonly getAllAbusesUsingGETPath = '/abuses';
  static readonly sendCommandUsingPOSTPath = '/abuses/command';
  static readonly findLatestContentByAbuseIdUsingGETPath = '/abuses/latest/{abuseId}';
  static readonly createAdminAdvertisementAbuseCommandUsingPOSTPath = '/abuses/posts/command';
  static readonly getAllSortingColumnsUsingGETPath = '/abuses/sorting/columns';
  static readonly getAllSourcesUsingGETPath = '/abuses/sources';
  static readonly getStatusesUsingGETPath = '/abuses/statuses';
  static readonly findOneByIdUsingGET1Path = '/abuses/{abuseId}';
  static readonly deleteOneByIdUsingDELETEPath = '/abuses/{abuseId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches page of abuse reports, can be filtered by [ids e.g. 1,3,2] [chatIds e.g. 1,2,3] [status e.g. 'REQUIRED']
   * @param params The `AdminAbuseControllerService.GetAllAbusesUsingGETParams` containing the following parameters:
   *
   * - `statuses`: statuses
   *
   * - `source`: source
   *
   * - `sorts`: sorts
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `chatIds`: chatIds
   *
   * - `abuseIds`: abuseIds
   *
   * @return OK
   */
  getAllAbusesUsingGETResponse(params: AdminAbuseControllerService.GetAllAbusesUsingGETParams): __Observable<__StrictHttpResponse<CommonPagedRestResponseAbuseSimplifiedDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.statuses || []).forEach(val => {if (val != null) __params = __params.append('statuses', val.toString())});
    if (params.source != null) __params = __params.set('source', params.source.toString());
    (params.sorts || []).forEach(val => {if (val != null) __params = __params.append('sorts', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.chatIds != null) __params = __params.set('chatIds', params.chatIds.toString());
    if (params.abuseIds != null) __params = __params.set('abuseIds', params.abuseIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommonPagedRestResponseAbuseSimplifiedDTO>;
      })
    );
  }
  /**
   * Fetches page of abuse reports, can be filtered by [ids e.g. 1,3,2] [chatIds e.g. 1,2,3] [status e.g. 'REQUIRED']
   * @param params The `AdminAbuseControllerService.GetAllAbusesUsingGETParams` containing the following parameters:
   *
   * - `statuses`: statuses
   *
   * - `source`: source
   *
   * - `sorts`: sorts
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `chatIds`: chatIds
   *
   * - `abuseIds`: abuseIds
   *
   * @return OK
   */
  getAllAbusesUsingGET(params: AdminAbuseControllerService.GetAllAbusesUsingGETParams): __Observable<CommonPagedRestResponseAbuseSimplifiedDTO> {
    return this.getAllAbusesUsingGETResponse(params).pipe(
      __map(_r => _r.body as CommonPagedRestResponseAbuseSimplifiedDTO)
    );
  }

  /**
   * Submits admin decision for abuse report
   * @param request request
   * @return OK
   */
  sendCommandUsingPOSTResponse(request: AbuseCommandRequest): __Observable<__StrictHttpResponse<AbuseExtendedDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/abuses/command`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbuseExtendedDTO>;
      })
    );
  }
  /**
   * Submits admin decision for abuse report
   * @param request request
   * @return OK
   */
  sendCommandUsingPOST(request: AbuseCommandRequest): __Observable<AbuseExtendedDTO> {
    return this.sendCommandUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as AbuseExtendedDTO)
    );
  }

  /**
   * Fetches the latest version of advertisement's disputable text
   * @param abuseId abuseId
   * @return OK
   */
  findLatestContentByAbuseIdUsingGETResponse(abuseId: number): __Observable<__StrictHttpResponse<SingleValueStringResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/latest/${encodeURIComponent(String(abuseId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SingleValueStringResponseDTO>;
      })
    );
  }
  /**
   * Fetches the latest version of advertisement's disputable text
   * @param abuseId abuseId
   * @return OK
   */
  findLatestContentByAbuseIdUsingGET(abuseId: number): __Observable<SingleValueStringResponseDTO> {
    return this.findLatestContentByAbuseIdUsingGETResponse(abuseId).pipe(
      __map(_r => _r.body as SingleValueStringResponseDTO)
    );
  }

  /**
   * Creates new abuse report by admin for advertisement
   * @param request request
   * @return OK
   */
  createAdminAdvertisementAbuseCommandUsingPOSTResponse(request: AbuseAdminRequest): __Observable<__StrictHttpResponse<AbuseExtendedDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/abuses/posts/command`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbuseExtendedDTO>;
      })
    );
  }
  /**
   * Creates new abuse report by admin for advertisement
   * @param request request
   * @return OK
   */
  createAdminAdvertisementAbuseCommandUsingPOST(request: AbuseAdminRequest): __Observable<AbuseExtendedDTO> {
    return this.createAdminAdvertisementAbuseCommandUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as AbuseExtendedDTO)
    );
  }

  /**
   * Fetches list of sorting columns, column name should end with _asc or _desc
   * @return OK
   */
  getAllSortingColumnsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/sorting/columns`,
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
   * Fetches list of sorting columns, column name should end with _asc or _desc
   * @return OK
   */
  getAllSortingColumnsUsingGET(): __Observable<Array<string>> {
    return this.getAllSortingColumnsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Fetches list of abuse sources
   * @return OK
   */
  getAllSourcesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/sources`,
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
   * Fetches list of abuse sources
   * @return OK
   */
  getAllSourcesUsingGET(): __Observable<Array<string>> {
    return this.getAllSourcesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Fetches list of available abuse statuses
   * @return OK
   */
  getStatusesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<StatusDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/statuses`,
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
   * Fetches list of available abuse statuses
   * @return OK
   */
  getStatusesUsingGET(): __Observable<Array<StatusDTO>> {
    return this.getStatusesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<StatusDTO>)
    );
  }

  /**
   * Fetches single abuse report with detailed data
   * @param abuseId abuseId
   * @return OK
   */
  findOneByIdUsingGET1Response(abuseId: number): __Observable<__StrictHttpResponse<AbuseExtendedDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/${encodeURIComponent(String(abuseId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AbuseExtendedDTO>;
      })
    );
  }
  /**
   * Fetches single abuse report with detailed data
   * @param abuseId abuseId
   * @return OK
   */
  findOneByIdUsingGET1(abuseId: number): __Observable<AbuseExtendedDTO> {
    return this.findOneByIdUsingGET1Response(abuseId).pipe(
      __map(_r => _r.body as AbuseExtendedDTO)
    );
  }

  /**
   * Softly deletes single abuse report by id
   * @param abuseId abuseId
   */
  deleteOneByIdUsingDELETEResponse(abuseId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/abuses/${encodeURIComponent(String(abuseId))}`,
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
   * Softly deletes single abuse report by id
   * @param abuseId abuseId
   */
  deleteOneByIdUsingDELETE(abuseId: number): __Observable<null> {
    return this.deleteOneByIdUsingDELETEResponse(abuseId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminAbuseControllerService {

  /**
   * Parameters for getAllAbusesUsingGET
   */
  export interface GetAllAbusesUsingGETParams {

    /**
     * statuses
     */
    statuses?: Array<string>;

    /**
     * source
     */
    source?: string;

    /**
     * sorts
     */
    sorts?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;

    /**
     * chatIds
     */
    chatIds?: string;

    /**
     * abuseIds
     */
    abuseIds?: string;
  }
}

export { AdminAbuseControllerService }
