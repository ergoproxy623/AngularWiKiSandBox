/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RequirementDTO } from '../models/requirement-dto';

/**
 * Requirements Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class RequirementsModifyControllerService extends __BaseService {
  static readonly createUsingPOST2Path = '/requirements/{criterionId}';
  static readonly bindRequirementWithCriterionUsingPUTPath = '/requirements/{criterionId}/{requirementId}';
  static readonly unbindRequirementFromCriterionUsingDELETEPath = '/requirements/{criterionId}/{requirementId}';
  static readonly updateUsingPUT2Path = '/requirements/{requirementId}';
  static readonly deleteUsingDELETE2Path = '/requirements/{requirementId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates requirement for criterion
   * @param params The `RequirementsModifyControllerService.CreateUsingPOST2Params` containing the following parameters:
   *
   * - `requirementDTO`: requirementDTO
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  createUsingPOST2Response(params: RequirementsModifyControllerService.CreateUsingPOST2Params): __Observable<__StrictHttpResponse<RequirementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.requirementDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/requirements/${encodeURIComponent(String(params.criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RequirementDTO>;
      })
    );
  }
  /**
   * Creates requirement for criterion
   * @param params The `RequirementsModifyControllerService.CreateUsingPOST2Params` containing the following parameters:
   *
   * - `requirementDTO`: requirementDTO
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  createUsingPOST2(params: RequirementsModifyControllerService.CreateUsingPOST2Params): __Observable<RequirementDTO> {
    return this.createUsingPOST2Response(params).pipe(
      __map(_r => _r.body as RequirementDTO)
    );
  }

  /**
   * Binds requirement with criteria
   * @param params The `RequirementsModifyControllerService.BindRequirementWithCriterionUsingPUTParams` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `criterionId`: criterionId
   */
  bindRequirementWithCriterionUsingPUTResponse(params: RequirementsModifyControllerService.BindRequirementWithCriterionUsingPUTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/requirements/${encodeURIComponent(String(params.criterionId))}/${encodeURIComponent(String(params.requirementId))}`,
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
   * Binds requirement with criteria
   * @param params The `RequirementsModifyControllerService.BindRequirementWithCriterionUsingPUTParams` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `criterionId`: criterionId
   */
  bindRequirementWithCriterionUsingPUT(params: RequirementsModifyControllerService.BindRequirementWithCriterionUsingPUTParams): __Observable<null> {
    return this.bindRequirementWithCriterionUsingPUTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Unbinds requirement from criteria
   * @param params The `RequirementsModifyControllerService.UnbindRequirementFromCriterionUsingDELETEParams` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `criterionId`: criterionId
   */
  unbindRequirementFromCriterionUsingDELETEResponse(params: RequirementsModifyControllerService.UnbindRequirementFromCriterionUsingDELETEParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/requirements/${encodeURIComponent(String(params.criterionId))}/${encodeURIComponent(String(params.requirementId))}`,
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
   * Unbinds requirement from criteria
   * @param params The `RequirementsModifyControllerService.UnbindRequirementFromCriterionUsingDELETEParams` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `criterionId`: criterionId
   */
  unbindRequirementFromCriterionUsingDELETE(params: RequirementsModifyControllerService.UnbindRequirementFromCriterionUsingDELETEParams): __Observable<null> {
    return this.unbindRequirementFromCriterionUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates requirement by its id
   * @param params The `RequirementsModifyControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `requirementDTO`: requirementDTO
   *
   * @return OK
   */
  updateUsingPUT2Response(params: RequirementsModifyControllerService.UpdateUsingPUT2Params): __Observable<__StrictHttpResponse<RequirementDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.requirementDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/requirements/${encodeURIComponent(String(params.requirementId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RequirementDTO>;
      })
    );
  }
  /**
   * Updates requirement by its id
   * @param params The `RequirementsModifyControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `requirementId`: requirementId
   *
   * - `requirementDTO`: requirementDTO
   *
   * @return OK
   */
  updateUsingPUT2(params: RequirementsModifyControllerService.UpdateUsingPUT2Params): __Observable<RequirementDTO> {
    return this.updateUsingPUT2Response(params).pipe(
      __map(_r => _r.body as RequirementDTO)
    );
  }

  /**
   * Deletes requirement by its
   * @param requirementId requirementId
   */
  deleteUsingDELETE2Response(requirementId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/requirements/${encodeURIComponent(String(requirementId))}`,
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
   * Deletes requirement by its
   * @param requirementId requirementId
   */
  deleteUsingDELETE2(requirementId: number): __Observable<null> {
    return this.deleteUsingDELETE2Response(requirementId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RequirementsModifyControllerService {

  /**
   * Parameters for createUsingPOST2
   */
  export interface CreateUsingPOST2Params {

    /**
     * requirementDTO
     */
    requirementDTO: RequirementDTO;

    /**
     * criterionId
     */
    criterionId: number;
  }

  /**
   * Parameters for bindRequirementWithCriterionUsingPUT
   */
  export interface BindRequirementWithCriterionUsingPUTParams {

    /**
     * requirementId
     */
    requirementId: number;

    /**
     * criterionId
     */
    criterionId: number;
  }

  /**
   * Parameters for unbindRequirementFromCriterionUsingDELETE
   */
  export interface UnbindRequirementFromCriterionUsingDELETEParams {

    /**
     * requirementId
     */
    requirementId: number;

    /**
     * criterionId
     */
    criterionId: number;
  }

  /**
   * Parameters for updateUsingPUT2
   */
  export interface UpdateUsingPUT2Params {

    /**
     * requirementId
     */
    requirementId: number;

    /**
     * requirementDTO
     */
    requirementDTO: RequirementDTO;
  }
}

export { RequirementsModifyControllerService }
