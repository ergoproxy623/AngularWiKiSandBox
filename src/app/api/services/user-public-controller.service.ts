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
class UserPublicControllerService extends __BaseService {
  static readonly renewAdvertisementPath = '/public/posts/renew/{token}';
  static readonly getUserAboutInfoPath = '/public/posts/aboutme/{advertisementId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param token undefined
   */
  renewAdvertisementResponse(token: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/posts/renew/${encodeURIComponent(String(token))}`,
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
  renewAdvertisement(token: string): __Observable<null> {
    return this.renewAdvertisementResponse(token).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param advertisementId undefined
   */
  getUserAboutInfoResponse(advertisementId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/posts/aboutme/${encodeURIComponent(String(advertisementId))}`,
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
   * @param advertisementId undefined
   */
  getUserAboutInfo(advertisementId: number): __Observable<null> {
    return this.getUserAboutInfoResponse(advertisementId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserPublicControllerService {
}

export { UserPublicControllerService }
