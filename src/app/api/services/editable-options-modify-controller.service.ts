/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EditableOptionDTO } from '../models/editable-option-dto';

/**
 * Editable Options Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class EditableOptionsModifyControllerService extends __BaseService {
  static readonly createUsingPOST1Path = '/editable_options/{criterionId}';
  static readonly updateUsingPUT1Path = '/editable_options/{optionId}';
  static readonly deleteUsingDELETE1Path = '/editable_options/{optionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates editable option for criterion
   * @param params The `EditableOptionsModifyControllerService.CreateUsingPOST1Params` containing the following parameters:
   *
   * - `editableOptionDTO`: editableOptionDTO
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  createUsingPOST1Response(params: EditableOptionsModifyControllerService.CreateUsingPOST1Params): __Observable<__StrictHttpResponse<EditableOptionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.editableOptionDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/editable_options/${encodeURIComponent(String(params.criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EditableOptionDTO>;
      })
    );
  }
  /**
   * Creates editable option for criterion
   * @param params The `EditableOptionsModifyControllerService.CreateUsingPOST1Params` containing the following parameters:
   *
   * - `editableOptionDTO`: editableOptionDTO
   *
   * - `criterionId`: criterionId
   *
   * @return OK
   */
  createUsingPOST1(params: EditableOptionsModifyControllerService.CreateUsingPOST1Params): __Observable<EditableOptionDTO> {
    return this.createUsingPOST1Response(params).pipe(
      __map(_r => _r.body as EditableOptionDTO)
    );
  }

  /**
   * Updates editable option by its id
   * @param params The `EditableOptionsModifyControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `optionId`: optionId
   *
   * - `editableOptionDTO`: editableOptionDTO
   *
   * @return OK
   */
  updateUsingPUT1Response(params: EditableOptionsModifyControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<EditableOptionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.editableOptionDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/editable_options/${encodeURIComponent(String(params.optionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EditableOptionDTO>;
      })
    );
  }
  /**
   * Updates editable option by its id
   * @param params The `EditableOptionsModifyControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `optionId`: optionId
   *
   * - `editableOptionDTO`: editableOptionDTO
   *
   * @return OK
   */
  updateUsingPUT1(params: EditableOptionsModifyControllerService.UpdateUsingPUT1Params): __Observable<EditableOptionDTO> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as EditableOptionDTO)
    );
  }

  /**
   * Deletes editable option by its id
   * @param optionId optionId
   */
  deleteUsingDELETE1Response(optionId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/editable_options/${encodeURIComponent(String(optionId))}`,
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
   * Deletes editable option by its id
   * @param optionId optionId
   */
  deleteUsingDELETE1(optionId: number): __Observable<null> {
    return this.deleteUsingDELETE1Response(optionId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EditableOptionsModifyControllerService {

  /**
   * Parameters for createUsingPOST1
   */
  export interface CreateUsingPOST1Params {

    /**
     * editableOptionDTO
     */
    editableOptionDTO: EditableOptionDTO;

    /**
     * criterionId
     */
    criterionId: number;
  }

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * optionId
     */
    optionId: number;

    /**
     * editableOptionDTO
     */
    editableOptionDTO: EditableOptionDTO;
  }
}

export { EditableOptionsModifyControllerService }
