/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SubCriterionDTO } from '../models/sub-criterion-dto';
import { SubCriterionStandardDTO } from '../models/sub-criterion-standard-dto';

/**
 * Sub Criteria Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class SubCriteriaReadControllerService extends __BaseService {
  static readonly findAllSubCriteriaUsingGETPath = '/public/sub_criteria';
  static readonly getSubCriterionIconUsingGET1Path = '/public/sub_criteria/icons/{fileName}';
  static readonly findOneByIdUsingGET2Path = '/public/sub_criteria/single/{subCriterionId}';
  static readonly findAllByParentIdUsingGET1Path = '/public/sub_criteria/{criterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of sub criteria limited by ids
   * @param criteria criteria
   * @return OK
   */
  findAllSubCriteriaUsingGETResponse(criteria: Array<number>): __Observable<__StrictHttpResponse<Array<SubCriterionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (criteria || []).forEach(val => {if (val != null) __params = __params.append('criteria', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SubCriterionDTO>>;
      })
    );
  }
  /**
   * Fetches list of sub criteria limited by ids
   * @param criteria criteria
   * @return OK
   */
  findAllSubCriteriaUsingGET(criteria: Array<number>): __Observable<Array<SubCriterionDTO>> {
    return this.findAllSubCriteriaUsingGETResponse(criteria).pipe(
      __map(_r => _r.body as Array<SubCriterionDTO>)
    );
  }

  /**
   * Fetches single sub criterion icon by file name
   * @param fileName fileName
   * @return OK
   */
  getSubCriterionIconUsingGET1Response(fileName: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria/icons/${encodeURIComponent(String(fileName))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Fetches single sub criterion icon by file name
   * @param fileName fileName
   * @return OK
   */
  getSubCriterionIconUsingGET1(fileName: string): __Observable<{}> {
    return this.getSubCriterionIconUsingGET1Response(fileName).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Fetches single sub criterion by its id
   * @param subCriterionId subCriterionId
   * @return OK
   */
  findOneByIdUsingGET2Response(subCriterionId: number): __Observable<__StrictHttpResponse<SubCriterionStandardDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria/single/${encodeURIComponent(String(subCriterionId))}`,
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
   * Fetches single sub criterion by its id
   * @param subCriterionId subCriterionId
   * @return OK
   */
  findOneByIdUsingGET2(subCriterionId: number): __Observable<SubCriterionStandardDTO> {
    return this.findOneByIdUsingGET2Response(subCriterionId).pipe(
      __map(_r => _r.body as SubCriterionStandardDTO)
    );
  }

  /**
   * Fetches list of sub criteria by single criterion (id)
   * @param criterionId criterionId
   * @return OK
   */
  findAllByParentIdUsingGET1Response(criterionId: number): __Observable<__StrictHttpResponse<Array<SubCriterionStandardDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria/${encodeURIComponent(String(criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SubCriterionStandardDTO>>;
      })
    );
  }
  /**
   * Fetches list of sub criteria by single criterion (id)
   * @param criterionId criterionId
   * @return OK
   */
  findAllByParentIdUsingGET1(criterionId: number): __Observable<Array<SubCriterionStandardDTO>> {
    return this.findAllByParentIdUsingGET1Response(criterionId).pipe(
      __map(_r => _r.body as Array<SubCriterionStandardDTO>)
    );
  }
}

module SubCriteriaReadControllerService {
}

export { SubCriteriaReadControllerService }
