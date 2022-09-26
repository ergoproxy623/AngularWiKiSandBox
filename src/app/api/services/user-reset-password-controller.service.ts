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
class UserResetPasswordControllerService extends __BaseService {
  static readonly checkResetTokenPath = '/public/password/reset';
  static readonly resetPasswordPath = '/public/password/reset';
  static readonly confirmPasswordResetPath = '/public/password/reset/confirm';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param token undefined
   */
  checkResetTokenResponse(token: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (token != null) __params = __params.set('token', token.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/password/reset`,
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
   * @param token undefined
   */
  checkResetToken(token: string): __Observable<null> {
    return this.checkResetTokenResponse(token).pipe(
      __map(_r => _r.body as null)
    );
  }
  resetPasswordResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/password/reset`,
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
  }  resetPassword(): __Observable<null> {
    return this.resetPasswordResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  confirmPasswordResetResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/password/reset/confirm`,
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
  }  confirmPasswordReset(): __Observable<null> {
    return this.confirmPasswordResetResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserResetPasswordControllerService {
}

export { UserResetPasswordControllerService }
