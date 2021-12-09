/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionWithRequirementsDTO } from '../models/criterion-with-requirements-dto';
import { RequirementDTO } from '../models/requirement-dto';

/**
 * Requirement Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class RequirementReadControllerService extends __BaseService {
  static readonly findAllCriteriaWithRequirementUsingGETPath = '/public/requirements';
  static readonly findAllRequirementsUsingGETPath = '/public/requirements/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of criteria with requirements
   * @param enabled enabled
   * @return OK
   */
  findAllCriteriaWithRequirementUsingGETResponse(enabled?: boolean): __Observable<__StrictHttpResponse<Array<CriterionWithRequirementsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (enabled != null) __params = __params.set('enabled', enabled.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/requirements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionWithRequirementsDTO>>;
      })
    );
  }
  /**
   * Fetches list of criteria with requirements
   * @param enabled enabled
   * @return OK
   */
  findAllCriteriaWithRequirementUsingGET(enabled?: boolean): __Observable<Array<CriterionWithRequirementsDTO>> {
    return this.findAllCriteriaWithRequirementUsingGETResponse(enabled).pipe(
      __map(_r => _r.body as Array<CriterionWithRequirementsDTO>)
    );
  }

  /**
   * Fetches list of all requirements
   * @return OK
   */
  findAllRequirementsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<RequirementDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/requirements/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RequirementDTO>>;
      })
    );
  }
  /**
   * Fetches list of all requirements
   * @return OK
   */
  findAllRequirementsUsingGET(): __Observable<Array<RequirementDTO>> {
    return this.findAllRequirementsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<RequirementDTO>)
    );
  }
}

module RequirementReadControllerService {
}

export { RequirementReadControllerService }
