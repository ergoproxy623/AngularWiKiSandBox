/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CMSRequest } from '../models/cmsrequest';

/**
 * Site Content Management Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class SiteContentManagementModifyControllerService extends __BaseService {
  static readonly saveOrUpdateCMSEntryUsingPOST1Path = '/public/settings/cms';
  static readonly uploadCriterionIconUsingPOST1Path = '/public/settings/cms/images/{cmsKey}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates CMS item
   * @param request request
   */
  saveOrUpdateCMSEntryUsingPOST1Response(request: CMSRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Creates CMS item
   * @param request request
   */
  saveOrUpdateCMSEntryUsingPOST1(request: CMSRequest): __Observable<null> {
    return this.saveOrUpdateCMSEntryUsingPOST1Response(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Uploads cms icon by cms key
   * @param params The `SiteContentManagementModifyControllerService.UploadCriterionIconUsingPOST1Params` containing the following parameters:
   *
   * - `cmsKey`: CMS key
   *
   * - `file`: CMS file
   *
   * @return OK
   */
  uploadCriterionIconUsingPOST1Response(params: SiteContentManagementModifyControllerService.UploadCriterionIconUsingPOST1Params): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/settings/cms/images/${encodeURIComponent(String(params.cmsKey))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: string}>;
      })
    );
  }
  /**
   * Uploads cms icon by cms key
   * @param params The `SiteContentManagementModifyControllerService.UploadCriterionIconUsingPOST1Params` containing the following parameters:
   *
   * - `cmsKey`: CMS key
   *
   * - `file`: CMS file
   *
   * @return OK
   */
  uploadCriterionIconUsingPOST1(params: SiteContentManagementModifyControllerService.UploadCriterionIconUsingPOST1Params): __Observable<{[key: string]: string}> {
    return this.uploadCriterionIconUsingPOST1Response(params).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }
}

module SiteContentManagementModifyControllerService {

  /**
   * Parameters for uploadCriterionIconUsingPOST1
   */
  export interface UploadCriterionIconUsingPOST1Params {

    /**
     * CMS key
     */
    cmsKey: string;

    /**
     * CMS file
     */
    file?: Blob;
  }
}

export { SiteContentManagementModifyControllerService }
