/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LegacyMigrationResultDTO } from '../models/legacy-migration-result-dto';
import { LegacyMigrationStatisticsDTO } from '../models/legacy-migration-statistics-dto';

/**
 * Admin Legacy Migration Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminLegacyMigrationControllerService extends __BaseService {
  static readonly uploadFilesUsingPOSTPath = '/legacy/migrations/batch';
  static readonly uploadImagesUsingGETPath = '/legacy/migrations/{sessionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Uploads migration files
   * @param params The `AdminLegacyMigrationControllerService.UploadFilesUsingPOSTParams` containing the following parameters:
   *
   * - `session`: Session identifier
   *
   * - `filtered`: Disable filter
   *
   * - `files`: Migration file(s) (json)
   *
   * @return OK
   */
  uploadFilesUsingPOSTResponse(params: AdminLegacyMigrationControllerService.UploadFilesUsingPOSTParams): __Observable<__StrictHttpResponse<Array<LegacyMigrationResultDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.session != null) __params = __params.set('session', params.session.toString());
    if (params.filtered != null) __params = __params.set('filtered', params.filtered.toString());
    (params.files || []).forEach(val => {if (val != null) __formData.append('files', val as string | Blob)});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/legacy/migrations/batch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LegacyMigrationResultDTO>>;
      })
    );
  }
  /**
   * Uploads migration files
   * @param params The `AdminLegacyMigrationControllerService.UploadFilesUsingPOSTParams` containing the following parameters:
   *
   * - `session`: Session identifier
   *
   * - `filtered`: Disable filter
   *
   * - `files`: Migration file(s) (json)
   *
   * @return OK
   */
  uploadFilesUsingPOST(params: AdminLegacyMigrationControllerService.UploadFilesUsingPOSTParams): __Observable<Array<LegacyMigrationResultDTO>> {
    return this.uploadFilesUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<LegacyMigrationResultDTO>)
    );
  }

  /**
   * Fetches legacy migration statistics
   * @param sessionId Session identifier
   * @return OK
   */
  uploadImagesUsingGETResponse(sessionId: string): __Observable<__StrictHttpResponse<LegacyMigrationStatisticsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/legacy/migrations/${encodeURIComponent(String(sessionId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LegacyMigrationStatisticsDTO>;
      })
    );
  }
  /**
   * Fetches legacy migration statistics
   * @param sessionId Session identifier
   * @return OK
   */
  uploadImagesUsingGET(sessionId: string): __Observable<LegacyMigrationStatisticsDTO> {
    return this.uploadImagesUsingGETResponse(sessionId).pipe(
      __map(_r => _r.body as LegacyMigrationStatisticsDTO)
    );
  }
}

module AdminLegacyMigrationControllerService {

  /**
   * Parameters for uploadFilesUsingPOST
   */
  export interface UploadFilesUsingPOSTParams {

    /**
     * Session identifier
     */
    session?: string;

    /**
     * Disable filter
     */
    filtered?: boolean;

    /**
     * Migration file(s) (json)
     */
    files?: Array<Blob>;
  }
}

export { AdminLegacyMigrationControllerService }
