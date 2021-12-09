/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AppSettingDTO } from '../models/app-setting-dto';
import { SelectableDTO } from '../models/selectable-dto';
import { StatusDTO } from '../models/status-dto';

/**
 * Settings Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class SettingsReadControllerService extends __BaseService {
  static readonly getAllSimplifiedSettingsUsingGETPath = '/public/settings';
  static readonly getAllSettingsUsingGETPath = '/public/settings/all';
  static readonly getAllGendersUsingGETPath = '/public/settings/genders';
  static readonly getAllJobModesUsingGETPath = '/public/settings/jobModes';
  static readonly getAllAdvertisementStatusesUsingGETPath = '/public/settings/posts/statuses';
  static readonly findValueByParamUsingGETPath = '/public/settings/{param}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns map of param name and value
   * @return OK
   */
  getAllSimplifiedSettingsUsingGETResponse(): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<{[key: string]: string}>;
      })
    );
  }
  /**
   * Returns map of param name and value
   * @return OK
   */
  getAllSimplifiedSettingsUsingGET(): __Observable<{[key: string]: string}> {
    return this.getAllSimplifiedSettingsUsingGETResponse().pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Returns all application settings' params
   * @param search search
   * @return OK
   */
  getAllSettingsUsingGETResponse(search?: string): __Observable<__StrictHttpResponse<Array<AppSettingDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (search != null) __params = __params.set('search', search.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppSettingDTO>>;
      })
    );
  }
  /**
   * Returns all application settings' params
   * @param search search
   * @return OK
   */
  getAllSettingsUsingGET(search?: string): __Observable<Array<AppSettingDTO>> {
    return this.getAllSettingsUsingGETResponse(search).pipe(
      __map(_r => _r.body as Array<AppSettingDTO>)
    );
  }

  /**
   * Returns all application defined genders
   * @return OK
   */
  getAllGendersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<SelectableDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/genders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SelectableDTO>>;
      })
    );
  }
  /**
   * Returns all application defined genders
   * @return OK
   */
  getAllGendersUsingGET(): __Observable<Array<SelectableDTO>> {
    return this.getAllGendersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<SelectableDTO>)
    );
  }

  /**
   * Returns all application defined job modes
   * @return OK
   */
  getAllJobModesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<SelectableDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/jobModes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SelectableDTO>>;
      })
    );
  }
  /**
   * Returns all application defined job modes
   * @return OK
   */
  getAllJobModesUsingGET(): __Observable<Array<SelectableDTO>> {
    return this.getAllJobModesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<SelectableDTO>)
    );
  }

  /**
   * Returns all application defined job modes
   * @return OK
   */
  getAllAdvertisementStatusesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<StatusDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/posts/statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StatusDTO>>;
      })
    );
  }
  /**
   * Returns all application defined job modes
   * @return OK
   */
  getAllAdvertisementStatusesUsingGET(): __Observable<Array<StatusDTO>> {
    return this.getAllAdvertisementStatusesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<StatusDTO>)
    );
  }

  /**
   * Returns single entry of param name and value
   * @param param param
   * @return OK
   */
  findValueByParamUsingGETResponse(param: string): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/settings/${encodeURIComponent(String(param))}`,
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
   * Returns single entry of param name and value
   * @param param param
   * @return OK
   */
  findValueByParamUsingGET(param: string): __Observable<{[key: string]: string}> {
    return this.findValueByParamUsingGETResponse(param).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }
}

module SettingsReadControllerService {
}

export { SettingsReadControllerService }
