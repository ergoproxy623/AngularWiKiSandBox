/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionDTO } from '../models/criterion-dto';
import { CriterionModifyRequest } from '../models/criterion-modify-request';

/**
 * Criterion Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class CriterionModifyControllerService extends __BaseService {
  static readonly createCriterionUsingPOSTPath = '/criteria';
  static readonly uploadCriterionIconUsingPOSTPath = '/criteria/images/{criterionId}';
  static readonly deleteCriterionIconByIdUsingDELETEPath = '/criteria/images/{criterionId}';
  static readonly updateCriterionByIdUsingPUTPath = '/criteria/{criterionId}';
  static readonly deleteCriterionByIdUsingDELETEPath = '/criteria/{criterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates criterion
   * @param request request
   * @return OK
   */
  createCriterionUsingPOSTResponse(request: CriterionModifyRequest): __Observable<__StrictHttpResponse<CriterionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/criteria`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionDTO>;
      })
    );
  }
  /**
   * Creates criterion
   * @param request request
   * @return OK
   */
  createCriterionUsingPOST(request: CriterionModifyRequest): __Observable<CriterionDTO> {
    return this.createCriterionUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as CriterionDTO)
    );
  }

  /**
   * Uploads icon for criterion
   * @param params The `CriterionModifyControllerService.UploadCriterionIconUsingPOSTParams` containing the following parameters:
   *
   * - `criterionId`: criterionId
   *
   * - `file`: Criterion icon file
   *
   * @return OK
   */
  uploadCriterionIconUsingPOSTResponse(params: CriterionModifyControllerService.UploadCriterionIconUsingPOSTParams): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/criteria/images/${encodeURIComponent(String(params.criterionId))}`,
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
   * Uploads icon for criterion
   * @param params The `CriterionModifyControllerService.UploadCriterionIconUsingPOSTParams` containing the following parameters:
   *
   * - `criterionId`: criterionId
   *
   * - `file`: Criterion icon file
   *
   * @return OK
   */
  uploadCriterionIconUsingPOST(params: CriterionModifyControllerService.UploadCriterionIconUsingPOSTParams): __Observable<{[key: string]: string}> {
    return this.uploadCriterionIconUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Removes criterion's icon using by criterion id
   * @param criterionId criterionId
   */
  deleteCriterionIconByIdUsingDELETEResponse(criterionId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/criteria/images/${encodeURIComponent(String(criterionId))}`,
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
   * Removes criterion's icon using by criterion id
   * @param criterionId criterionId
   */
  deleteCriterionIconByIdUsingDELETE(criterionId: number): __Observable<null> {
    return this.deleteCriterionIconByIdUsingDELETEResponse(criterionId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates criterion using criterion id
   * @param params The `CriterionModifyControllerService.UpdateCriterionByIdUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  updateCriterionByIdUsingPUTResponse(params: CriterionModifyControllerService.UpdateCriterionByIdUsingPUTParams): __Observable<__StrictHttpResponse<CriterionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/criteria/${encodeURIComponent(String(params.criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionDTO>;
      })
    );
  }
  /**
   * Updates criterion using criterion id
   * @param params The `CriterionModifyControllerService.UpdateCriterionByIdUsingPUTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  updateCriterionByIdUsingPUT(params: CriterionModifyControllerService.UpdateCriterionByIdUsingPUTParams): __Observable<CriterionDTO> {
    return this.updateCriterionByIdUsingPUTResponse(params).pipe(
      __map(_r => _r.body as CriterionDTO)
    );
  }

  /**
   * Deletes (softly) criterion by criterion id
   * @param criterionId criterionId
   */
  deleteCriterionByIdUsingDELETEResponse(criterionId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/criteria/${encodeURIComponent(String(criterionId))}`,
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
   * Deletes (softly) criterion by criterion id
   * @param criterionId criterionId
   */
  deleteCriterionByIdUsingDELETE(criterionId: number): __Observable<null> {
    return this.deleteCriterionByIdUsingDELETEResponse(criterionId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CriterionModifyControllerService {

  /**
   * Parameters for uploadCriterionIconUsingPOST
   */
  export interface UploadCriterionIconUsingPOSTParams {

    /**
     * criterionId
     */
    criterionId: number;

    /**
     * Criterion icon file
     */
    file?: Blob;
  }

  /**
   * Parameters for updateCriterionByIdUsingPUT
   */
  export interface UpdateCriterionByIdUsingPUTParams {

    /**
     * request
     */
    request: CriterionModifyRequest;

    /**
     * criterionId
     */
    criterionId: number;
  }
}

export { CriterionModifyControllerService }
