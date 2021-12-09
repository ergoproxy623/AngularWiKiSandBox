/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SubCriterionDTO } from '../models/sub-criterion-dto';
import { SubCriterionExtendedDTO } from '../models/sub-criterion-extended-dto';

/**
 * Sub Criterion Exchange Controller
 */
@Injectable({
  providedIn: 'root',
})
class SubCriterionExchangeControllerService extends __BaseService {
  static readonly findAllSubCriteriaUsingGET1Path = '/public/sub_criteria/exchange';
  static readonly findAllSubCriteriaExtendedUsingGETPath = '/public/sub_criteria/exchange/{criterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of sub criteria, primarily for internal use
   * @param criteria criteria
   * @return OK
   */
  findAllSubCriteriaUsingGET1Response(criteria: Array<number>): __Observable<__StrictHttpResponse<Array<SubCriterionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (criteria || []).forEach(val => {if (val != null) __params = __params.append('criteria', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria/exchange`,
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
   * Fetches list of sub criteria, primarily for internal use
   * @param criteria criteria
   * @return OK
   */
  findAllSubCriteriaUsingGET1(criteria: Array<number>): __Observable<Array<SubCriterionDTO>> {
    return this.findAllSubCriteriaUsingGET1Response(criteria).pipe(
      __map(_r => _r.body as Array<SubCriterionDTO>)
    );
  }

  /**
   * Fetches single sub criterion by its id, primarily for internal use
   * @param criterionId criterionId
   * @return OK
   */
  findAllSubCriteriaExtendedUsingGETResponse(criterionId: number): __Observable<__StrictHttpResponse<Array<SubCriterionExtendedDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/sub_criteria/exchange/${encodeURIComponent(String(criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SubCriterionExtendedDTO>>;
      })
    );
  }
  /**
   * Fetches single sub criterion by its id, primarily for internal use
   * @param criterionId criterionId
   * @return OK
   */
  findAllSubCriteriaExtendedUsingGET(criterionId: number): __Observable<Array<SubCriterionExtendedDTO>> {
    return this.findAllSubCriteriaExtendedUsingGETResponse(criterionId).pipe(
      __map(_r => _r.body as Array<SubCriterionExtendedDTO>)
    );
  }
}

module SubCriterionExchangeControllerService {
}

export { SubCriterionExchangeControllerService }
