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
class UserReplyControllerService extends __BaseService {
  static readonly getAnswersByQuestionIdsPath = '/answer';
  static readonly makeAnswerPath = '/answer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param questionIds undefined
   */
  getAnswersByQuestionIdsResponse(questionIds: Array<number>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (questionIds != null) __params = __params.set('questionIds', questionIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/answer`,
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
   * @param questionIds undefined
   */
  getAnswersByQuestionIds(questionIds: Array<number>): __Observable<null> {
    return this.getAnswersByQuestionIdsResponse(questionIds).pipe(
      __map(_r => _r.body as null)
    );
  }
  makeAnswerResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/answer`,
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
  }  makeAnswer(): __Observable<null> {
    return this.makeAnswerResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserReplyControllerService {
}

export { UserReplyControllerService }
