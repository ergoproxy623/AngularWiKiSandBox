/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CMSResponseDTO } from '../models/cmsresponse-dto';
import { CMSRequest } from '../models/cmsrequest';

/**
 * Admin Email Template Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminEmailTemplateControllerService extends __BaseService {
  static readonly findAllEmailTemplateAnchorsUsingGETPath = '/templates/emails';
  static readonly saveOrUpdateCMSEntryUsingPOSTPath = '/templates/emails';
  static readonly findOneAnchorByKeyUsingGETPath = '/templates/emails/{key}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of email anchors with values (if value is missing, default one is supplied)
   * @return OK
   */
  findAllEmailTemplateAnchorsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<CMSResponseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/templates/emails`,
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
   * Fetches list of email anchors with values (if value is missing, default one is supplied)
   * @return OK
   */
  findAllEmailTemplateAnchorsUsingGET(): __Observable<Array<CMSResponseDTO>> {
    return this.findAllEmailTemplateAnchorsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<CMSResponseDTO>)
    );
  }

  /**
   * Saves or updates email anchor value and processed item
   * @param request request
   * @return OK
   */
  saveOrUpdateCMSEntryUsingPOSTResponse(request: CMSRequest): __Observable<__StrictHttpResponse<CMSResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/templates/emails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CMSResponseDTO>;
      })
    );
  }
  /**
   * Saves or updates email anchor value and processed item
   * @param request request
   * @return OK
   */
  saveOrUpdateCMSEntryUsingPOST(request: CMSRequest): __Observable<CMSResponseDTO> {
    return this.saveOrUpdateCMSEntryUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as CMSResponseDTO)
    );
  }

  /**
   * Fetches email anchor by key with value (if value is missing, default one is supplied)
   * @param key key
   * @return OK
   */
  findOneAnchorByKeyUsingGETResponse(key: string): __Observable<__StrictHttpResponse<CMSResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/templates/emails/${encodeURIComponent(String(key))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CMSResponseDTO>;
      })
    );
  }
  /**
   * Fetches email anchor by key with value (if value is missing, default one is supplied)
   * @param key key
   * @return OK
   */
  findOneAnchorByKeyUsingGET(key: string): __Observable<CMSResponseDTO> {
    return this.findOneAnchorByKeyUsingGETResponse(key).pipe(
      __map(_r => _r.body as CMSResponseDTO)
    );
  }
}

module AdminEmailTemplateControllerService {
}

export { AdminEmailTemplateControllerService }
