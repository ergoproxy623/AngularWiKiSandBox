/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionDTO } from '../models/criterion-dto';
import { CriterionExtendedDTO } from '../models/criterion-extended-dto';

/**
 * Criterion Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class CriterionReadControllerService extends __BaseService {
  static readonly findAllCategoriesUsingGETPath = '/public/criteria';
  static readonly getCriterionIconUsingGETPath = '/public/criteria/icons/{fileName}';
  static readonly findCategoryByIdUsingGETPath = '/public/criteria/{criterionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of criteria
   * @param enabled enabled
   * @return OK
   */
  findAllCategoriesUsingGETResponse(enabled?: boolean): __Observable<__StrictHttpResponse<Array<CriterionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (enabled != null) __params = __params.set('enabled', enabled.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/criteria`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionDTO>>;
      })
    );
  }
  /**
   * Fetches list of criteria
   * @param enabled enabled
   * @return OK
   */
  findAllCategoriesUsingGET(enabled?: boolean): __Observable<Array<CriterionDTO>> {
    return this.findAllCategoriesUsingGETResponse(enabled).pipe(
      __map(_r => _r.body as Array<CriterionDTO>)
    );
  }

  /**
   * Fetches single criterion's icon by file name
   * @param fileName fileName
   * @return OK
   */
  getCriterionIconUsingGETResponse(fileName: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/criteria/icons/${encodeURIComponent(String(fileName))}`,
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
   * Fetches single criterion's icon by file name
   * @param fileName fileName
   * @return OK
   */
  getCriterionIconUsingGET(fileName: string): __Observable<{}> {
    return this.getCriterionIconUsingGETResponse(fileName).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Fetches single criterion using criterion id
   * @param criterionId criterionId
   * @return OK
   */
  findCategoryByIdUsingGETResponse(criterionId: number): __Observable<__StrictHttpResponse<CriterionExtendedDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/criteria/${encodeURIComponent(String(criterionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionExtendedDTO>;
      })
    );
  }
  /**
   * Fetches single criterion using criterion id
   * @param criterionId criterionId
   * @return OK
   */
  findCategoryByIdUsingGET(criterionId: number): __Observable<CriterionExtendedDTO> {
    return this.findCategoryByIdUsingGETResponse(criterionId).pipe(
      __map(_r => _r.body as CriterionExtendedDTO)
    );
  }
}

module CriterionReadControllerService {
}

export { CriterionReadControllerService }
