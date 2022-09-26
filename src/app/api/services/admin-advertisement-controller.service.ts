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
class AdminAdvertisementControllerService extends __BaseService {
  static readonly renewAdPath = '/supervise/posts/renew/{advertisementId}';
  static readonly getUsersProfileDTOs2Path = '/supervise/posts';
  static readonly findOneByIdPath = '/supervise/posts/{advertisementId}';
  static readonly deleteOneByPath = '/supervise/posts/{advertisementId}';
  static readonly findAllStatusesPath = '/supervise/posts/statuses';
  static readonly getOrderedColumnsPath = '/supervise/posts/ordered/columns';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param advertisementId undefined
   */
  renewAdResponse(advertisementId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/supervise/posts/renew/${encodeURIComponent(String(advertisementId))}`,
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
  renewAd(advertisementId: number): __Observable<null> {
    return this.renewAdResponse(advertisementId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AdminAdvertisementControllerService.GetUsersProfileDTOs2Params` containing the following parameters:
   *
   * - `statuses`:
   *
   * - `sorts`:
   *
   * - `size`:
   *
   * - `radius`:
   *
   * - `postalCode`:
   *
   * - `page`:
   *
   * - `ownerId`:
   *
   * - `longitude`:
   *
   * - `latitude`:
   *
   * - `jobMode`:
   *
   * - `criterionIds`:
   *
   * - `createdBefore`:
   *
   * - `createdAfter`:
   *
   * - `city`:
   */
  getUsersProfileDTOs2Response(params: AdminAdvertisementControllerService.GetUsersProfileDTOs2Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.statuses != null) __params = __params.set('statuses', params.statuses.toString());
    if (params.sorts != null) __params = __params.set('sorts', params.sorts.toString());
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.radius != null) __params = __params.set('radius', params.radius.toString());
    if (params.postalCode != null) __params = __params.set('postalCode', params.postalCode.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.ownerId != null) __params = __params.set('ownerId', params.ownerId.toString());
    if (params.longitude != null) __params = __params.set('longitude', params.longitude.toString());
    if (params.latitude != null) __params = __params.set('latitude', params.latitude.toString());
    if (params.jobMode != null) __params = __params.set('jobMode', params.jobMode.toString());
    if (params.criterionIds != null) __params = __params.set('criterionIds', params.criterionIds.toString());
    if (params.createdBefore != null) __params = __params.set('createdBefore', params.createdBefore.toString());
    if (params.createdAfter != null) __params = __params.set('createdAfter', params.createdAfter.toString());
    if (params.city != null) __params = __params.set('city', params.city.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervise/posts`,
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
   * @param params The `AdminAdvertisementControllerService.GetUsersProfileDTOs2Params` containing the following parameters:
   *
   * - `statuses`:
   *
   * - `sorts`:
   *
   * - `size`:
   *
   * - `radius`:
   *
   * - `postalCode`:
   *
   * - `page`:
   *
   * - `ownerId`:
   *
   * - `longitude`:
   *
   * - `latitude`:
   *
   * - `jobMode`:
   *
   * - `criterionIds`:
   *
   * - `createdBefore`:
   *
   * - `createdAfter`:
   *
   * - `city`:
   */
  getUsersProfileDTOs2(params: AdminAdvertisementControllerService.GetUsersProfileDTOs2Params): __Observable<null> {
    return this.getUsersProfileDTOs2Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param advertisementId undefined
   */
  findOneByIdResponse(advertisementId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervise/posts/${encodeURIComponent(String(advertisementId))}`,
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
  findOneById(advertisementId: number): __Observable<null> {
    return this.findOneByIdResponse(advertisementId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param advertisementId undefined
   */
  deleteOneByResponse(advertisementId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/supervise/posts/${encodeURIComponent(String(advertisementId))}`,
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
  deleteOneBy(advertisementId: number): __Observable<null> {
    return this.deleteOneByResponse(advertisementId).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAllStatusesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervise/posts/statuses`,
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
  }  findAllStatuses(): __Observable<null> {
    return this.findAllStatusesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getOrderedColumnsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervise/posts/ordered/columns`,
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
  }  getOrderedColumns(): __Observable<null> {
    return this.getOrderedColumnsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminAdvertisementControllerService {

  /**
   * Parameters for getUsersProfileDTOs2
   */
  export interface GetUsersProfileDTOs2Params {
    statuses?: Array<'CREATED' | 'ACTIVE' | 'INACTIVE' | 'DISABLED' | 'DISABLED_BY_ADMIN' | 'RESTRICTED_BY_BL' | 'RESTRICTED_BY_ABUSE' | 'RESTRICTED_BY_ADMIN' | 'PENDING_BL_APPROVAL' | 'PENDING_ABUSE_APPROVAL' | 'PENDING_ADMIN_APPROVAL'>;
    sorts?: Array<string>;
    size?: number;
    radius?: number;
    postalCode?: string;
    page?: number;
    ownerId?: number;
    longitude?: string;
    latitude?: string;
    jobMode?: 'MINI_JOB' | 'MIDI_JOB';
    criterionIds?: string;
    createdBefore?: string;
    createdAfter?: string;
    city?: string;
  }
}

export { AdminAdvertisementControllerService }
