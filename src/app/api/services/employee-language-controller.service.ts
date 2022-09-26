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
class EmployeeLanguageControllerService extends __BaseService {
  static readonly findAllByUserPath = '/profile/language';
  static readonly updateUserLanguagesPath = '/profile/language';
  static readonly addOrRemoveUserLanguagesPath = '/profile/language';
  static readonly findAllPath = '/profile/language/all';
  static readonly deleteUserLanguagePath = '/profile/language/{language}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  findAllByUserResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/language`,
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
  }  findAllByUser(): __Observable<null> {
    return this.findAllByUserResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  updateUserLanguagesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/profile/language`,
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
  }  updateUserLanguages(): __Observable<null> {
    return this.updateUserLanguagesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  addOrRemoveUserLanguagesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/profile/language`,
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
  }  addOrRemoveUserLanguages(): __Observable<null> {
    return this.addOrRemoveUserLanguagesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param langPart undefined
   */
  findAllResponse(langPart?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (langPart != null) __params = __params.set('langPart', langPart.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile/language/all`,
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
   * @param langPart undefined
   */
  findAll(langPart?: string): __Observable<null> {
    return this.findAllResponse(langPart).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param language undefined
   */
  deleteUserLanguageResponse(language: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/profile/language/${encodeURIComponent(String(language))}`,
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
   * @param language undefined
   */
  deleteUserLanguage(language: string): __Observable<null> {
    return this.deleteUserLanguageResponse(language).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeLanguageControllerService {
}

export { EmployeeLanguageControllerService }
