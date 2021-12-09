/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FAQCategoryDTO } from '../models/faqcategory-dto';
import { FAQQuestionDTO } from '../models/faqquestion-dto';
import { ToggleRequest } from '../models/toggle-request';

/**
 * Faq Modify Controller
 */
@Injectable({
  providedIn: 'root',
})
class FaqModifyControllerService extends __BaseService {
  static readonly createOrUpdateFaqCategoryUsingPOSTPath = '/faq/categories';
  static readonly uploadSubCriterionIconUsingPOSTPath = '/faq/categories/icons/{categoryId}';
  static readonly deleteCategoryByIdUsingDELETEPath = '/faq/categories/{categoryId}';
  static readonly createOrUpdateFaqQuestionUsingPOSTPath = '/faq/questions';
  static readonly deleteQuestionByIdUsingDELETEPath = '/faq/questions/{questionId}';
  static readonly toggleCategoryByIdUsingPATCHPath = '/faq/toggle/categories/{categoryId}';
  static readonly toggleQuestionByIdUsingPATCHPath = '/faq/toggle/questions/{questionId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates (if categoryId is null) or updates existing FAQ category, except icon file path
   * @param category category
   * @return OK
   */
  createOrUpdateFaqCategoryUsingPOSTResponse(category: FAQCategoryDTO): __Observable<__StrictHttpResponse<FAQCategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/faq/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FAQCategoryDTO>;
      })
    );
  }
  /**
   * Creates (if categoryId is null) or updates existing FAQ category, except icon file path
   * @param category category
   * @return OK
   */
  createOrUpdateFaqCategoryUsingPOST(category: FAQCategoryDTO): __Observable<FAQCategoryDTO> {
    return this.createOrUpdateFaqCategoryUsingPOSTResponse(category).pipe(
      __map(_r => _r.body as FAQCategoryDTO)
    );
  }

  /**
   * Uploads and re-writes FAQ category icon file path
   * @param params The `FaqModifyControllerService.UploadSubCriterionIconUsingPOSTParams` containing the following parameters:
   *
   * - `categoryId`: FAQ category id
   *
   * - `file`: FAQ category icon file
   *
   * @return OK
   */
  uploadSubCriterionIconUsingPOSTResponse(params: FaqModifyControllerService.UploadSubCriterionIconUsingPOSTParams): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/faq/categories/icons/${encodeURIComponent(String(params.categoryId))}`,
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
   * Uploads and re-writes FAQ category icon file path
   * @param params The `FaqModifyControllerService.UploadSubCriterionIconUsingPOSTParams` containing the following parameters:
   *
   * - `categoryId`: FAQ category id
   *
   * - `file`: FAQ category icon file
   *
   * @return OK
   */
  uploadSubCriterionIconUsingPOST(params: FaqModifyControllerService.UploadSubCriterionIconUsingPOSTParams): __Observable<{[key: string]: string}> {
    return this.uploadSubCriterionIconUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * Deletes FAQ category, be careful, as it removes also nested questions and answers
   * @param categoryId FAQ category Id
   */
  deleteCategoryByIdUsingDELETEResponse(categoryId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/faq/categories/${encodeURIComponent(String(categoryId))}`,
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
   * Deletes FAQ category, be careful, as it removes also nested questions and answers
   * @param categoryId FAQ category Id
   */
  deleteCategoryByIdUsingDELETE(categoryId: number): __Observable<null> {
    return this.deleteCategoryByIdUsingDELETEResponse(categoryId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Creates (if questionId is null) or updates existing FAQ question, (if title exists - updates)
   * @param question question
   * @return OK
   */
  createOrUpdateFaqQuestionUsingPOSTResponse(question: FAQQuestionDTO): __Observable<__StrictHttpResponse<FAQQuestionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = question;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/faq/questions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FAQQuestionDTO>;
      })
    );
  }
  /**
   * Creates (if questionId is null) or updates existing FAQ question, (if title exists - updates)
   * @param question question
   * @return OK
   */
  createOrUpdateFaqQuestionUsingPOST(question: FAQQuestionDTO): __Observable<FAQQuestionDTO> {
    return this.createOrUpdateFaqQuestionUsingPOSTResponse(question).pipe(
      __map(_r => _r.body as FAQQuestionDTO)
    );
  }

  /**
   * Deletes FAQ question, be careful, as it removes also nested answers
   * @param questionId FAQ question Id
   */
  deleteQuestionByIdUsingDELETEResponse(questionId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/faq/questions/${encodeURIComponent(String(questionId))}`,
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
   * Deletes FAQ question, be careful, as it removes also nested answers
   * @param questionId FAQ question Id
   */
  deleteQuestionByIdUsingDELETE(questionId: number): __Observable<null> {
    return this.deleteQuestionByIdUsingDELETEResponse(questionId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Enables/disables FAQ category
   * @param params The `FaqModifyControllerService.ToggleCategoryByIdUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `categoryId`: FAQ category Id
   */
  toggleCategoryByIdUsingPATCHResponse(params: FaqModifyControllerService.ToggleCategoryByIdUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/faq/toggle/categories/${encodeURIComponent(String(params.categoryId))}`,
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
   * Enables/disables FAQ category
   * @param params The `FaqModifyControllerService.ToggleCategoryByIdUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `categoryId`: FAQ category Id
   */
  toggleCategoryByIdUsingPATCH(params: FaqModifyControllerService.ToggleCategoryByIdUsingPATCHParams): __Observable<null> {
    return this.toggleCategoryByIdUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Enables/disables FAQ question
   * @param params The `FaqModifyControllerService.ToggleQuestionByIdUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `questionId`: FAQ question Id
   */
  toggleQuestionByIdUsingPATCHResponse(params: FaqModifyControllerService.ToggleQuestionByIdUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/faq/toggle/questions/${encodeURIComponent(String(params.questionId))}`,
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
   * Enables/disables FAQ question
   * @param params The `FaqModifyControllerService.ToggleQuestionByIdUsingPATCHParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `questionId`: FAQ question Id
   */
  toggleQuestionByIdUsingPATCH(params: FaqModifyControllerService.ToggleQuestionByIdUsingPATCHParams): __Observable<null> {
    return this.toggleQuestionByIdUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FaqModifyControllerService {

  /**
   * Parameters for uploadSubCriterionIconUsingPOST
   */
  export interface UploadSubCriterionIconUsingPOSTParams {

    /**
     * FAQ category id
     */
    categoryId: number;

    /**
     * FAQ category icon file
     */
    file?: Blob;
  }

  /**
   * Parameters for toggleCategoryByIdUsingPATCH
   */
  export interface ToggleCategoryByIdUsingPATCHParams {

    /**
     * request
     */
    request: ToggleRequest;

    /**
     * FAQ category Id
     */
    categoryId: number;
  }

  /**
   * Parameters for toggleQuestionByIdUsingPATCH
   */
  export interface ToggleQuestionByIdUsingPATCHParams {

    /**
     * request
     */
    request: ToggleRequest;

    /**
     * FAQ question Id
     */
    questionId: number;
  }
}

export { FaqModifyControllerService }
