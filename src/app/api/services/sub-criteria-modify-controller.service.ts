/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SubCriterionStandardDTO } from '../models/sub-criterion-standard-dto';
import { SubCriterionModifyRequest } from '../models/sub-criterion-modify-request';
import { ToggleRequest } from '../models/toggle-request';

/**
 * Sub Criteria Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class SubCriteriaModifyControllerService extends __BaseService {
  static readonly createUsingPOST3Path = '/sub_criteria';
  static readonly uploadSubCriterionIconUsingPOST1Path = '/sub_criteria/images/{subCriterionId}';
  static readonly updateUsingPUT3Path = '/sub_criteria/{subCriterionId}';
  static readonly deleteUsingDELETE3Path = '/sub_criteria/{subCriterionId}';
  static readonly toggleUsingPATCH1Path = '/sub_criteria/{subCriterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates sub criterion
   * @param request request
   * @return OK
   */
  createUsingPOST3Response(request: SubCriterionModifyRequest): __Observable<__StrictHttpResponse<SubCriterionStandardDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sub_criteria`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SubCriterionStandardDTO>;
      })
    );
  }
  /**
   * Creates sub criterion
   * @param request request
   * @return OK
   */
  createUsingPOST3(request: SubCriterionModifyRequest): __Observable<SubCriterionStandardDTO> {
    return this.createUsingPOST3Response(request).pipe(
      __map(_r => _r.body as SubCriterionStandardDTO)
    );
  }

  /**
   * Uploads sub criterion icon
   * @param params The `SubCriteriaModifyControllerService.UploadSubCriterionIconUsingPOST1Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `file`: SubCriterion icon file
   *
   * @return OK
   */
  uploadSubCriterionIconUsingPOST1Response(params: SubCriteriaModifyControllerService.UploadSubCriterionIconUsingPOST1Params): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sub_criteria/images/${encodeURIComponent(String(params.subCriterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: string}>;
      })
    );
  }
  /**
   * Uploads sub criterion icon
   * @param params The `SubCriteriaModifyControllerService.UploadSubCriterionIconUsingPOST1Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `file`: SubCriterion icon file
   *
   * @return OK
   */
  uploadSubCriterionIconUsingPOST1(params: SubCriteriaModifyControllerService.UploadSubCriterionIconUsingPOST1Params): __Observable<{[key: string]: string}> {
    return this.uploadSubCriterionIconUsingPOST1Response(params).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Updates sub criterion y its id
   * @param params The `SubCriteriaModifyControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `request`: request
   *
   * @return OK
   */
  updateUsingPUT3Response(params: SubCriteriaModifyControllerService.UpdateUsingPUT3Params): __Observable<__StrictHttpResponse<SubCriterionStandardDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/sub_criteria/${encodeURIComponent(String(params.subCriterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SubCriterionStandardDTO>;
      })
    );
  }
  /**
   * Updates sub criterion y its id
   * @param params The `SubCriteriaModifyControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `request`: request
   *
   * @return OK
   */
  updateUsingPUT3(params: SubCriteriaModifyControllerService.UpdateUsingPUT3Params): __Observable<SubCriterionStandardDTO> {
    return this.updateUsingPUT3Response(params).pipe(
      __map(_r => _r.body as SubCriterionStandardDTO)
    );
  }

  /**
   * Deletes (physical) sub criterion y its id
   * @param subCriterionId subCriterionId
   */
  deleteUsingDELETE3Response(subCriterionId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/sub_criteria/${encodeURIComponent(String(subCriterionId))}`,
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
   * Deletes (physical) sub criterion y its id
   * @param subCriterionId subCriterionId
   */
  deleteUsingDELETE3(subCriterionId: number): __Observable<null> {
    return this.deleteUsingDELETE3Response(subCriterionId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Enables/disables sub criterion y its id
   * @param params The `SubCriteriaModifyControllerService.ToggleUsingPATCH1Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `request`: request
   *
   * @return OK
   */
  toggleUsingPATCH1Response(params: SubCriteriaModifyControllerService.ToggleUsingPATCH1Params): __Observable<__StrictHttpResponse<SubCriterionStandardDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/sub_criteria/${encodeURIComponent(String(params.subCriterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SubCriterionStandardDTO>;
      })
    );
  }
  /**
   * Enables/disables sub criterion y its id
   * @param params The `SubCriteriaModifyControllerService.ToggleUsingPATCH1Params` containing the following parameters:
   *
   * - `subCriterionId`: subCriterionId
   *
   * - `request`: request
   *
   * @return OK
   */
  toggleUsingPATCH1(params: SubCriteriaModifyControllerService.ToggleUsingPATCH1Params): __Observable<SubCriterionStandardDTO> {
    return this.toggleUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as SubCriterionStandardDTO)
    );
  }
}

module SubCriteriaModifyControllerService {

  /**
   * Parameters for uploadSubCriterionIconUsingPOST1
   */
  export interface UploadSubCriterionIconUsingPOST1Params {

    /**
     * subCriterionId
     */
    subCriterionId: number;

    /**
     * SubCriterion icon file
     */
    file?: Blob;
  }

  /**
   * Parameters for updateUsingPUT3
   */
  export interface UpdateUsingPUT3Params {

    /**
     * subCriterionId
     */
    subCriterionId: number;

    /**
     * request
     */
    request: SubCriterionModifyRequest;
  }

  /**
   * Parameters for toggleUsingPATCH1
   */
  export interface ToggleUsingPATCH1Params {

    /**
     * subCriterionId
     */
    subCriterionId: number;

    /**
     * request
     */
    request: ToggleRequest;
  }
}

export { SubCriteriaModifyControllerService }
