/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Admin Image Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminImageModifyControllerService extends __BaseService {
  static readonly uploadImageUsingPOSTPath = '/images';
  static readonly uploadImagesUsingPOSTPath = '/images/batch';
  static readonly getUserImageUsingPUTPath = '/images/{fileName}';
  static readonly getUserImageUsingDELETEPath = '/images/{fileName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Uploads new image file
   * @param file Image/icon file
   * @return OK
   */
  uploadImageUsingPOSTResponse(file?: Blob): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (file != null) { __formData.append('file', file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/images`,
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
   * Uploads new image file
   * @param file Image/icon file
   * @return OK
   */
  uploadImageUsingPOST(file?: Blob): __Observable<{[key: string]: string}> {
    return this.uploadImageUsingPOSTResponse(file).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Uploads new image file
   * @param files Image/icon files
   * @return OK
   */
  uploadImagesUsingPOSTResponse(files?: Array<Blob>): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    (files || []).forEach(val => {if (val != null) __formData.append('files', val as string | Blob)});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/images/batch`,
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
   * Uploads new image file
   * @param files Image/icon files
   * @return OK
   */
  uploadImagesUsingPOST(files?: Array<Blob>): __Observable<Array<string>> {
    return this.uploadImagesUsingPOSTResponse(files).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Uploads new image file and removes old with the same file name
   * @param params The `AdminImageModifyControllerService.GetUserImageUsingPUTParams` containing the following parameters:
   *
   * - `fileName`: fileName
   *
   * - `file`: Image/icon file
   *
   * @return OK
   */
  getUserImageUsingPUTResponse(params: AdminImageModifyControllerService.GetUserImageUsingPUTParams): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/images/${encodeURIComponent(String(params.fileName))}`,
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
   * Uploads new image file and removes old with the same file name
   * @param params The `AdminImageModifyControllerService.GetUserImageUsingPUTParams` containing the following parameters:
   *
   * - `fileName`: fileName
   *
   * - `file`: Image/icon file
   *
   * @return OK
   */
  getUserImageUsingPUT(params: AdminImageModifyControllerService.GetUserImageUsingPUTParams): __Observable<{[key: string]: string}> {
    return this.getUserImageUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Delete all existing files with provided file name
   * @param fileName fileName
   */
  getUserImageUsingDELETEResponse(fileName: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/images/${encodeURIComponent(String(fileName))}`,
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
   * Delete all existing files with provided file name
   * @param fileName fileName
   */
  getUserImageUsingDELETE(fileName: string): __Observable<null> {
    return this.getUserImageUsingDELETEResponse(fileName).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminImageModifyControllerService {

  /**
   * Parameters for getUserImageUsingPUT
   */
  export interface GetUserImageUsingPUTParams {

    /**
     * fileName
     */
    fileName: string;

    /**
     * Image/icon file
     */
    file?: Blob;
  }
}

export { AdminImageModifyControllerService }
