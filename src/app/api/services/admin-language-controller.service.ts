/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VocabularyGroupedItemDTO } from '../models/vocabulary-grouped-item-dto';
import { SingleValueStringRequest } from '../models/single-value-string-request';

/**
 * Admin Language Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminLanguageControllerService extends __BaseService {
  static readonly findAllRestrictedGroupByFirstLetterUsingGETPath = '/languages';
  static readonly addUserLanguageUsingPOSTPath = '/languages';
  static readonly findAllLanguageNamesUsingGETPath = '/languages/search';
  static readonly deleteUserLanguageUsingDELETEPath = '/languages/{language}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches grouped by first letter list of languages
   * @return OK
   */
  findAllRestrictedGroupByFirstLetterUsingGETResponse(): __Observable<__StrictHttpResponse<Array<VocabularyGroupedItemDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/languages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VocabularyGroupedItemDTO>>;
      })
    );
  }
  /**
   * Fetches grouped by first letter list of languages
   * @return OK
   */
  findAllRestrictedGroupByFirstLetterUsingGET(): __Observable<Array<VocabularyGroupedItemDTO>> {
    return this.findAllRestrictedGroupByFirstLetterUsingGETResponse().pipe(
      __map(_r => _r.body as Array<VocabularyGroupedItemDTO>)
    );
  }

  /**
   * Adds new language and returns grouped by first letter vocabulary item
   * @param request request
   * @return OK
   */
  addUserLanguageUsingPOSTResponse(request: SingleValueStringRequest): __Observable<__StrictHttpResponse<VocabularyGroupedItemDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/languages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VocabularyGroupedItemDTO>;
      })
    );
  }
  /**
   * Adds new language and returns grouped by first letter vocabulary item
   * @param request request
   * @return OK
   */
  addUserLanguageUsingPOST(request: SingleValueStringRequest): __Observable<VocabularyGroupedItemDTO> {
    return this.addUserLanguageUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as VocabularyGroupedItemDTO)
    );
  }

  /**
   * Fetches list of languages
   * @param word word
   * @return OK
   */
  findAllLanguageNamesUsingGETResponse(word?: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (word != null) __params = __params.set('word', word.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/languages/search`,
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
   * Fetches list of languages
   * @param word word
   * @return OK
   */
  findAllLanguageNamesUsingGET(word?: string): __Observable<Array<string>> {
    return this.findAllLanguageNamesUsingGETResponse(word).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Removes (if found) language and returns grouped by first letter vocabulary item
   * @param language language
   * @return OK
   */
  deleteUserLanguageUsingDELETEResponse(language: string): __Observable<__StrictHttpResponse<VocabularyGroupedItemDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/languages/${encodeURIComponent(String(language))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VocabularyGroupedItemDTO>;
      })
    );
  }
  /**
   * Removes (if found) language and returns grouped by first letter vocabulary item
   * @param language language
   * @return OK
   */
  deleteUserLanguageUsingDELETE(language: string): __Observable<VocabularyGroupedItemDTO> {
    return this.deleteUserLanguageUsingDELETEResponse(language).pipe(
      __map(_r => _r.body as VocabularyGroupedItemDTO)
    );
  }
}

module AdminLanguageControllerService {
}

export { AdminLanguageControllerService }
