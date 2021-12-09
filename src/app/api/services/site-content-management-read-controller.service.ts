/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CMSResponseDTO } from '../models/cmsresponse-dto';

/**
 * Site Content Management Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class SiteContentManagementReadControllerService extends __BaseService {
  static readonly findAllCMSMapUsingGETPath = '/public/settings/cms';
  static readonly getUserImageUsingGETPath = '/public/settings/cms/images/{fileName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list cms items
   * @return OK
   */
  findAllCMSMapUsingGETResponse(): __Observable<__StrictHttpResponse<Array<CMSResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/cms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CMSResponseDTO>>;
      })
    );
  }
  /**
   * Fetches list cms items
   * @return OK
   */
  findAllCMSMapUsingGET(): __Observable<Array<CMSResponseDTO>> {
    return this.findAllCMSMapUsingGETResponse().pipe(
      __map(_r => _r.body as Array<CMSResponseDTO>)
    );
  }

  /**
   * Fetches cms icon by file name
   * @param fileName fileName
   * @return OK
   */
  getUserImageUsingGETResponse(fileName: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/cms/images/${encodeURIComponent(String(fileName))}`,
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
   * Fetches cms icon by file name
   * @param fileName fileName
   * @return OK
   */
  getUserImageUsingGET(fileName: string): __Observable<{}> {
    return this.getUserImageUsingGETResponse(fileName).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module SiteContentManagementReadControllerService {
}

export { SiteContentManagementReadControllerService }
