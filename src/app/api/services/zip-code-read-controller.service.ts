/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZipCodeSimplifiedDTO } from '../models/zip-code-simplified-dto';
import { DetailedAutocompleteDTO } from '../models/detailed-autocomplete-dto';
import { SimpleAutocompleteDTO } from '../models/simple-autocomplete-dto';

/**
 * Zip Code Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class ZipCodeReadControllerService extends __BaseService {
  static readonly findAllMatchingZipCodesUsingGETPath = '/public/zip_codes';
  static readonly findAllDetailedThatContainsUsingGETPath = '/public/zip_codes/autocompletes/detailed';
  static readonly findAllSimpleThatContainsUsingGETPath = '/public/zip_codes/autocompletes/simple';
  static readonly clearPostalCodesCacheUsingDELETEPath = '/public/zip_codes/cache';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of zip codes' details by query string (starting with) and
   * @param params The `ZipCodeReadControllerService.FindAllMatchingZipCodesUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `explicitStreet`: explicitStreet
   *
   * - `explicitCity`: explicitCity
   *
   * @return OK
   */
  findAllMatchingZipCodesUsingGETResponse(params: ZipCodeReadControllerService.FindAllMatchingZipCodesUsingGETParams): __Observable<__StrictHttpResponse<Array<ZipCodeSimplifiedDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.explicitStreet != null) __params = __params.set('explicitStreet', params.explicitStreet.toString());
    if (params.explicitCity != null) __params = __params.set('explicitCity', params.explicitCity.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/zip_codes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ZipCodeSimplifiedDTO>>;
      })
    );
  }
  /**
   * Fetches list of zip codes' details by query string (starting with) and
   * @param params The `ZipCodeReadControllerService.FindAllMatchingZipCodesUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `explicitStreet`: explicitStreet
   *
   * - `explicitCity`: explicitCity
   *
   * @return OK
   */
  findAllMatchingZipCodesUsingGET(params: ZipCodeReadControllerService.FindAllMatchingZipCodesUsingGETParams): __Observable<Array<ZipCodeSimplifiedDTO>> {
    return this.findAllMatchingZipCodesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ZipCodeSimplifiedDTO>)
    );
  }

  /**
   * Fetches list of autocompletes with street values
   * @param params The `ZipCodeReadControllerService.FindAllDetailedThatContainsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `allowEmptyStreet`: allowEmptyStreet
   *
   * @return OK
   */
  findAllDetailedThatContainsUsingGETResponse(params: ZipCodeReadControllerService.FindAllDetailedThatContainsUsingGETParams): __Observable<__StrictHttpResponse<Array<DetailedAutocompleteDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.allowEmptyStreet != null) __params = __params.set('allowEmptyStreet', params.allowEmptyStreet.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/zip_codes/autocompletes/detailed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DetailedAutocompleteDTO>>;
      })
    );
  }
  /**
   * Fetches list of autocompletes with street values
   * @param params The `ZipCodeReadControllerService.FindAllDetailedThatContainsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `allowEmptyStreet`: allowEmptyStreet
   *
   * @return OK
   */
  findAllDetailedThatContainsUsingGET(params: ZipCodeReadControllerService.FindAllDetailedThatContainsUsingGETParams): __Observable<Array<DetailedAutocompleteDTO>> {
    return this.findAllDetailedThatContainsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<DetailedAutocompleteDTO>)
    );
  }

  /**
   * Fetches list of autocompletes without street values
   * @param query query
   * @return OK
   */
  findAllSimpleThatContainsUsingGETResponse(query: string): __Observable<__StrictHttpResponse<Array<SimpleAutocompleteDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/zip_codes/autocompletes/simple`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SimpleAutocompleteDTO>>;
      })
    );
  }
  /**
   * Fetches list of autocompletes without street values
   * @param query query
   * @return OK
   */
  findAllSimpleThatContainsUsingGET(query: string): __Observable<Array<SimpleAutocompleteDTO>> {
    return this.findAllSimpleThatContainsUsingGETResponse(query).pipe(
      __map(_r => _r.body as Array<SimpleAutocompleteDTO>)
    );
  }

  /**
   * Cleans zip codes' details cache
   * @param key key
   */
  clearPostalCodesCacheUsingDELETEResponse(key?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (key != null) __params = __params.set('key', key.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/public/zip_codes/cache`,
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
   * Cleans zip codes' details cache
   * @param key key
   */
  clearPostalCodesCacheUsingDELETE(key?: string): __Observable<null> {
    return this.clearPostalCodesCacheUsingDELETEResponse(key).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ZipCodeReadControllerService {

  /**
   * Parameters for findAllMatchingZipCodesUsingGET
   */
  export interface FindAllMatchingZipCodesUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * explicitStreet
     */
    explicitStreet?: string;

    /**
     * explicitCity
     */
    explicitCity?: string;
  }

  /**
   * Parameters for findAllDetailedThatContainsUsingGET
   */
  export interface FindAllDetailedThatContainsUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * allowEmptyStreet
     */
    allowEmptyStreet?: boolean;
  }
}

export { ZipCodeReadControllerService }
