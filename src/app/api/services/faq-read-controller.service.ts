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

/**
 * Faq Read Controller
 */
@Injectable({
  providedIn: 'root',
})
class FaqReadControllerService extends __BaseService {
  static readonly findAllFAQCategoriesUsingGETPath = '/public/faq/categories';
  static readonly getSubCriterionIconUsingGETPath = '/public/faq/categories/icons/{fileName}';
  static readonly findAllFAQQuestionsUsingGETPath = '/public/faq/questions';
  static readonly findOneFAQQuestionUsingGETPath = '/public/faq/questions/single/{questionId}';
  static readonly findAllFAQQuestionsByCategoryIdUsingGETPath = '/public/faq/questions/{categoryId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Fetches list of FAQ categories, filtering -> all or only enabled
   * @param enabledOnly all or only enabled
   * @return OK
   */
  findAllFAQCategoriesUsingGETResponse(enabledOnly?: boolean): __Observable<__StrictHttpResponse<Array<FAQCategoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (enabledOnly != null) __params = __params.set('enabledOnly', enabledOnly.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/faq/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FAQCategoryDTO>>;
      })
    );
  }
  /**
   * Fetches list of FAQ categories, filtering -> all or only enabled
   * @param enabledOnly all or only enabled
   * @return OK
   */
  findAllFAQCategoriesUsingGET(enabledOnly?: boolean): __Observable<Array<FAQCategoryDTO>> {
    return this.findAllFAQCategoriesUsingGETResponse(enabledOnly).pipe(
      __map(_r => _r.body as Array<FAQCategoryDTO>)
    );
  }

  /**
   * Fetches FAQ category icon by file name
   * @param fileName Icon's file name
   * @return OK
   */
  getSubCriterionIconUsingGETResponse(fileName: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/faq/categories/icons/${encodeURIComponent(String(fileName))}`,
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
   * Fetches FAQ category icon by file name
   * @param fileName Icon's file name
   * @return OK
   */
  getSubCriterionIconUsingGET(fileName: string): __Observable<{}> {
    return this.getSubCriterionIconUsingGETResponse(fileName).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Fetches list of all FAQ questions, filtering -> all or only enabled
   * @param enabledOnly all or only enabled
   * @return OK
   */
  findAllFAQQuestionsUsingGETResponse(enabledOnly?: boolean): __Observable<__StrictHttpResponse<Array<FAQQuestionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (enabledOnly != null) __params = __params.set('enabledOnly', enabledOnly.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/faq/questions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FAQQuestionDTO>>;
      })
    );
  }
  /**
   * Fetches list of all FAQ questions, filtering -> all or only enabled
   * @param enabledOnly all or only enabled
   * @return OK
   */
  findAllFAQQuestionsUsingGET(enabledOnly?: boolean): __Observable<Array<FAQQuestionDTO>> {
    return this.findAllFAQQuestionsUsingGETResponse(enabledOnly).pipe(
      __map(_r => _r.body as Array<FAQQuestionDTO>)
    );
  }

  /**
   * Fetches single FAQ question
   * @param questionId FAQ question Id
   * @return OK
   */
  findOneFAQQuestionUsingGETResponse(questionId: number): __Observable<__StrictHttpResponse<FAQQuestionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/faq/questions/single/${encodeURIComponent(String(questionId))}`,
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
   * Fetches single FAQ question
   * @param questionId FAQ question Id
   * @return OK
   */
  findOneFAQQuestionUsingGET(questionId: number): __Observable<FAQQuestionDTO> {
    return this.findOneFAQQuestionUsingGETResponse(questionId).pipe(
      __map(_r => _r.body as FAQQuestionDTO)
    );
  }

  /**
   * Fetches list of FAQ questions mapped by FAQ category (categoryId), filtering -> all or only enabled
   * @param params The `FaqReadControllerService.FindAllFAQQuestionsByCategoryIdUsingGETParams` containing the following parameters:
   *
   * - `categoryId`: FAQ category Id
   *
   * - `enabledOnly`: all or only enabled
   *
   * @return OK
   */
  findAllFAQQuestionsByCategoryIdUsingGETResponse(params: FaqReadControllerService.FindAllFAQQuestionsByCategoryIdUsingGETParams): __Observable<__StrictHttpResponse<Array<FAQQuestionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.enabledOnly != null) __params = __params.set('enabledOnly', params.enabledOnly.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/faq/questions/${encodeURIComponent(String(params.categoryId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FAQQuestionDTO>>;
      })
    );
  }
  /**
   * Fetches list of FAQ questions mapped by FAQ category (categoryId), filtering -> all or only enabled
   * @param params The `FaqReadControllerService.FindAllFAQQuestionsByCategoryIdUsingGETParams` containing the following parameters:
   *
   * - `categoryId`: FAQ category Id
   *
   * - `enabledOnly`: all or only enabled
   *
   * @return OK
   */
  findAllFAQQuestionsByCategoryIdUsingGET(params: FaqReadControllerService.FindAllFAQQuestionsByCategoryIdUsingGETParams): __Observable<Array<FAQQuestionDTO>> {
    return this.findAllFAQQuestionsByCategoryIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<FAQQuestionDTO>)
    );
  }
}

module FaqReadControllerService {

  /**
   * Parameters for findAllFAQQuestionsByCategoryIdUsingGET
   */
  export interface FindAllFAQQuestionsByCategoryIdUsingGETParams {

    /**
     * FAQ category Id
     */
    categoryId: number;

    /**
     * all or only enabled
     */
    enabledOnly?: boolean;
  }
}

export { FaqReadControllerService }
