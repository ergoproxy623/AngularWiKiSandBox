/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Commercial Content Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommercialContentReadControllerService extends __BaseService {
  static readonly findAllCommercialWordsUsingGETPath = '/public/commercial_words';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of commercial words
   * @return OK
   */
  findAllCommercialWordsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/commercial_words`,
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
   * Fetches list of commercial words
   * @return OK
   */
  findAllCommercialWordsUsingGET(): __Observable<Array<string>> {
    return this.findAllCommercialWordsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module CommercialContentReadControllerService {
}

export { CommercialContentReadControllerService }
