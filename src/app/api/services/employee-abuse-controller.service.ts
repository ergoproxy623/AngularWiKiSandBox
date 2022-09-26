/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class EmployeeAbuseControllerService extends __BaseService {
  static readonly acceptAbusePath = '/public/abuses';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EmployeeAbuseControllerService.AcceptAbuseParams` containing the following parameters:
   *
   * - `related-entity-id`:
   *
   * - `message`:
   *
   * - `email`:
   *
   * - `abuse-source`:
   */
  acceptAbuseResponse(params: EmployeeAbuseControllerService.AcceptAbuseParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.relatedEntityId != null) __params = __params.set('related-entity-id', params.relatedEntityId.toString());
    if (params.message != null) __params = __params.set('message', params.message.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.abuseSource != null) __params = __params.set('abuse-source', params.abuseSource.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/abuses`,
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
   * @param params The `EmployeeAbuseControllerService.AcceptAbuseParams` containing the following parameters:
   *
   * - `related-entity-id`:
   *
   * - `message`:
   *
   * - `email`:
   *
   * - `abuse-source`:
   */
  acceptAbuse(params: EmployeeAbuseControllerService.AcceptAbuseParams): __Observable<null> {
    return this.acceptAbuseResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeAbuseControllerService {

  /**
   * Parameters for acceptAbuse
   */
  export interface AcceptAbuseParams {
    relatedEntityId: number;
    message: string;
    email: string;
    abuseSource?: 'BLACKLIST' | 'RESTRICTED_WORDS' | 'VISITOR_ABUSE' | 'ADMIN_ABUSE' | 'CHAT_ABUSE' | 'USER_LOCK';
  }
}

export { EmployeeAbuseControllerService }
