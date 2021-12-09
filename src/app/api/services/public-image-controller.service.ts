/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Public Image Controller
 */
@Injectable({
  providedIn: 'root',
})
class PublicImageControllerService extends __BaseService {
  static readonly findAllPublicIconLinksUsingGETPath = '/public/images/links/all';
  static readonly getImageUsingGETPath = '/public/images/{fileName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches all public icons' links
   * @return OK
   */
  findAllPublicIconLinksUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/images/links/all`,
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
   * Fetches all public icons' links
   * @return OK
   */
  findAllPublicIconLinksUsingGET(): __Observable<Array<string>> {
    return this.findAllPublicIconLinksUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Fetches public icon by file name
   * @param fileName fileName
   * @return OK
   */
  getImageUsingGETResponse(fileName: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/images/${encodeURIComponent(String(fileName))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Fetches public icon by file name
   * @param fileName fileName
   * @return OK
   */
  getImageUsingGET(fileName: string): __Observable<{}> {
    return this.getImageUsingGETResponse(fileName).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PublicImageControllerService {
}

export { PublicImageControllerService }
