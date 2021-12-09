/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Restricted Word Controller
 */
@Injectable({
  providedIn: 'root',
})
class RestrictedWordControllerService extends __BaseService {
  static readonly findAllRestrictedWordsUsingGETPath = '/public/restricted_words';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of restricted words
   * @return OK
   */
  findAllRestrictedWordsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/restricted_words`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * Fetches list of restricted words
   * @return OK
   */
  findAllRestrictedWordsUsingGET(): __Observable<Array<string>> {
    return this.findAllRestrictedWordsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module RestrictedWordControllerService {
}

export { RestrictedWordControllerService }
