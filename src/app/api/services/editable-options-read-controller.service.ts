/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionWithEditableOptionsDTO } from '../models/criterion-with-editable-options-dto';

/**
 * Editable Options Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class EditableOptionsReadControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/public/editable_options';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of criteria with editable options
   * @param enabled enabled
   * @return OK
   */
  findAllUsingGETResponse(enabled?: boolean): __Observable<__StrictHttpResponse<Array<CriterionWithEditableOptionsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (enabled != null) __params = __params.set('enabled', enabled.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/editable_options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionWithEditableOptionsDTO>>;
      })
    );
  }
  /**
   * Fetches list of criteria with editable options
   * @param enabled enabled
   * @return OK
   */
  findAllUsingGET(enabled?: boolean): __Observable<Array<CriterionWithEditableOptionsDTO>> {
    return this.findAllUsingGETResponse(enabled).pipe(
      __map(_r => _r.body as Array<CriterionWithEditableOptionsDTO>)
    );
  }
}

module EditableOptionsReadControllerService {
}

export { EditableOptionsReadControllerService }
