/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AppSettingRequest } from '../models/app-setting-request';

/**
 * Settings Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class SettingsModifyControllerService extends __BaseService {
  static readonly updateSettingParamUsingPUTPath = '/public/settings';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Updates application parameter value
   * @param request request
   */
  updateSettingParamUsingPUTResponse(request: AppSettingRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/public/settings`,
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
   * Updates application parameter value
   * @param request request
   */
  updateSettingParamUsingPUT(request: AppSettingRequest): __Observable<null> {
    return this.updateSettingParamUsingPUTResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SettingsModifyControllerService {
}

export { SettingsModifyControllerService }
