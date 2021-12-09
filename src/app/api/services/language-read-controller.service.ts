/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Language Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class LanguageReadControllerService extends __BaseService {
  static readonly findAllLanguagesUsingGETPath = '/public/languages';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of available languages
   * @param query query
   * @return OK
   */
  findAllLanguagesUsingGETResponse(query?: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/languages`,
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
   * Fetches list of available languages
   * @param query query
   * @return OK
   */
  findAllLanguagesUsingGET(query?: string): __Observable<Array<string>> {
    return this.findAllLanguagesUsingGETResponse(query).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module LanguageReadControllerService {
}

export { LanguageReadControllerService }
