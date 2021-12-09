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
 * Admin Vocabulary Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminVocabularyControllerService extends __BaseService {
  static readonly findAllCommercialGroupByFirstLetterUsingGETPath = '/vocabulary/commercial';
  static readonly createCommercialUsingPOSTPath = '/vocabulary/commercial';
  static readonly findAllCommercialByWordUsingGETPath = '/vocabulary/commercial/search';
  static readonly deleteCommercialUsingDELETEPath = '/vocabulary/commercial/{word}';
  static readonly findAllRestrictedGroupByFirstLetterUsingGET1Path = '/vocabulary/restricted';
  static readonly createRestrictedUsingPOSTPath = '/vocabulary/restricted';
  static readonly findAllRestrictedByWordUsingGETPath = '/vocabulary/restricted/search';
  static readonly deleteRestrictedUsingDELETEPath = '/vocabulary/restricted/{word}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches grouped by first letter list of commercial words
   * @return OK
   */
  findAllCommercialGroupByFirstLetterUsingGETResponse(): __Observable<__StrictHttpResponse<Array<VocabularyGroupedItemDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vocabulary/commercial`,
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
   * Fetches grouped by first letter list of commercial words
   * @return OK
   */
  findAllCommercialGroupByFirstLetterUsingGET(): __Observable<Array<VocabularyGroupedItemDTO>> {
    return this.findAllCommercialGroupByFirstLetterUsingGETResponse().pipe(
      __map(_r => _r.body as Array<VocabularyGroupedItemDTO>)
    );
  }

  /**
   * createCommercial
   * @param request request
   * @return OK
   */
  createCommercialUsingPOSTResponse(request: SingleValueStringRequest): __Observable<__StrictHttpResponse<Array<VocabularyGroupedItemDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/vocabulary/commercial`,
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
   * createCommercial
   * @param request request
   * @return OK
   */
  createCommercialUsingPOST(request: SingleValueStringRequest): __Observable<Array<VocabularyGroupedItemDTO>> {
    return this.createCommercialUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<VocabularyGroupedItemDTO>)
    );
  }

  /**
   * findAllCommercialByWord
   * @param word word
   * @return OK
   */
  findAllCommercialByWordUsingGETResponse(word: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (word != null) __params = __params.set('word', word.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vocabulary/commercial/search`,
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
   * findAllCommercialByWord
   * @param word word
   * @return OK
   */
  findAllCommercialByWordUsingGET(word: string): __Observable<Array<string>> {
    return this.findAllCommercialByWordUsingGETResponse(word).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * deleteCommercial
   * @param word word
   * @return OK
   */
  deleteCommercialUsingDELETEResponse(word: string): __Observable<__StrictHttpResponse<VocabularyGroupedItemDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/vocabulary/commercial/${encodeURIComponent(String(word))}`,
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
   * deleteCommercial
   * @param word word
   * @return OK
   */
  deleteCommercialUsingDELETE(word: string): __Observable<VocabularyGroupedItemDTO> {
    return this.deleteCommercialUsingDELETEResponse(word).pipe(
      __map(_r => _r.body as VocabularyGroupedItemDTO)
    );
  }

  /**
   * Fetches grouped by first letter list of restricted words
   * @return OK
   */
  findAllRestrictedGroupByFirstLetterUsingGET1Response(): __Observable<__StrictHttpResponse<Array<VocabularyGroupedItemDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vocabulary/restricted`,
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
   * Fetches grouped by first letter list of restricted words
   * @return OK
   */
  findAllRestrictedGroupByFirstLetterUsingGET1(): __Observable<Array<VocabularyGroupedItemDTO>> {
    return this.findAllRestrictedGroupByFirstLetterUsingGET1Response().pipe(
      __map(_r => _r.body as Array<VocabularyGroupedItemDTO>)
    );
  }

  /**
   * createRestricted
   * @param request request
   * @return OK
   */
  createRestrictedUsingPOSTResponse(request: SingleValueStringRequest): __Observable<__StrictHttpResponse<Array<VocabularyGroupedItemDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/vocabulary/restricted`,
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
   * createRestricted
   * @param request request
   * @return OK
   */
  createRestrictedUsingPOST(request: SingleValueStringRequest): __Observable<Array<VocabularyGroupedItemDTO>> {
    return this.createRestrictedUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<VocabularyGroupedItemDTO>)
    );
  }

  /**
   * Fetches list of restricted words
   * @param word word
   * @return OK
   */
  findAllRestrictedByWordUsingGETResponse(word: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (word != null) __params = __params.set('word', word.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vocabulary/restricted/search`,
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
   * @param word word
   * @return OK
   */
  findAllRestrictedByWordUsingGET(word: string): __Observable<Array<string>> {
    return this.findAllRestrictedByWordUsingGETResponse(word).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * deleteRestricted
   * @param word word
   * @return OK
   */
  deleteRestrictedUsingDELETEResponse(word: string): __Observable<__StrictHttpResponse<VocabularyGroupedItemDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/vocabulary/restricted/${encodeURIComponent(String(word))}`,
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
   * deleteRestricted
   * @param word word
   * @return OK
   */
  deleteRestrictedUsingDELETE(word: string): __Observable<VocabularyGroupedItemDTO> {
    return this.deleteRestrictedUsingDELETEResponse(word).pipe(
      __map(_r => _r.body as VocabularyGroupedItemDTO)
    );
  }
}

module AdminVocabularyControllerService {
}

export { AdminVocabularyControllerService }
