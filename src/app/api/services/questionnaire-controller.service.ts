/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AnswerDto } from '../models/answer-dto';
import { QuestionDto } from '../models/question-dto';
import { UserGenSimpleStatisticsDTO } from '../models/user-gen-simple-statistics-dto';
import { AnswerRequestDto } from '../models/answer-request-dto';

/**
 * Questionnaire Controller
 */
@Injectable({
  providedIn: 'root',
})
class QuestionnaireControllerService extends __BaseService {
  static readonly deleteAnswerUsingDELETEPath = '/answer/{id}';
  static readonly findAllUsingGET1Path = '/public/question';
  static readonly getOneByIdUsingGETPath = '/public/question/{id}';
  static readonly createQuestionUsingPOSTPath = '/question';
  static readonly findQuestionStatisticsUsingGETPath = '/question/statistics';
  static readonly addAnswersToUserQuestionUsingPOSTPath = '/question/{id}';
  static readonly changeQuestionUsingPUTPath = '/question/{id}';
  static readonly deleteQuestionUsingDELETEPath = '/question/{id}';
  static readonly addAnswerUsingPOSTPath = '/question/{id}/answer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Smart answer removal, if forced it removes users' answers references, else removes only unreferenced users' answers
   * @param params The `QuestionnaireControllerService.DeleteAnswerUsingDELETEParams` containing the following parameters:
   *
   * - `id`: answer id
   *
   * - `forced`: delete all if true
   *
   * @return OK
   */
  deleteAnswerUsingDELETEResponse(params: QuestionnaireControllerService.DeleteAnswerUsingDELETEParams): __Observable<__StrictHttpResponse<Array<AnswerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.forced != null) __params = __params.set('forced', params.forced.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/answer/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AnswerDto>>;
      })
    );
  }
  /**
   * Smart answer removal, if forced it removes users' answers references, else removes only unreferenced users' answers
   * @param params The `QuestionnaireControllerService.DeleteAnswerUsingDELETEParams` containing the following parameters:
   *
   * - `id`: answer id
   *
   * - `forced`: delete all if true
   *
   * @return OK
   */
  deleteAnswerUsingDELETE(params: QuestionnaireControllerService.DeleteAnswerUsingDELETEParams): __Observable<Array<AnswerDto>> {
    return this.deleteAnswerUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as Array<AnswerDto>)
    );
  }

  /**
   * Fetches list of questions
   * @return OK
   */
  findAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<QuestionDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/question`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QuestionDto>>;
      })
    );
  }
  /**
   * Fetches list of questions
   * @return OK
   */
  findAllUsingGET1(): __Observable<Array<QuestionDto>> {
    return this.findAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<QuestionDto>)
    );
  }

  /**
   * Fetches single question by id
   * @param id id
   * @return OK
   */
  getOneByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<QuestionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/public/question/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuestionDto>;
      })
    );
  }
  /**
   * Fetches single question by id
   * @param id id
   * @return OK
   */
  getOneByIdUsingGET(id: number): __Observable<QuestionDto> {
    return this.getOneByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as QuestionDto)
    );
  }

  /**
   * Creates question by id
   * @param questionDto questionDto
   * @return OK
   */
  createQuestionUsingPOSTResponse(questionDto: QuestionDto): __Observable<__StrictHttpResponse<QuestionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = questionDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/question`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuestionDto>;
      })
    );
  }
  /**
   * Creates question by id
   * @param questionDto questionDto
   * @return OK
   */
  createQuestionUsingPOST(questionDto: QuestionDto): __Observable<QuestionDto> {
    return this.createQuestionUsingPOSTResponse(questionDto).pipe(
      __map(_r => _r.body as QuestionDto)
    );
  }

  /**
   * Fetches users' answers' statistics
   * @return OK
   */
  findQuestionStatisticsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<UserGenSimpleStatisticsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/question/statistics`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserGenSimpleStatisticsDTO>>;
      })
    );
  }
  /**
   * Fetches users' answers' statistics
   * @return OK
   */
  findQuestionStatisticsUsingGET(): __Observable<Array<UserGenSimpleStatisticsDTO>> {
    return this.findQuestionStatisticsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<UserGenSimpleStatisticsDTO>)
    );
  }

  /**
   * Saves user's answer
   * @param params The `QuestionnaireControllerService.AddAnswersToUserQuestionUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `answers`: answers
   *
   * @return OK
   */
  addAnswersToUserQuestionUsingPOSTResponse(params: QuestionnaireControllerService.AddAnswersToUserQuestionUsingPOSTParams): __Observable<__StrictHttpResponse<Array<AnswerRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.answers;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/question/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AnswerRequestDto>>;
      })
    );
  }
  /**
   * Saves user's answer
   * @param params The `QuestionnaireControllerService.AddAnswersToUserQuestionUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `answers`: answers
   *
   * @return OK
   */
  addAnswersToUserQuestionUsingPOST(params: QuestionnaireControllerService.AddAnswersToUserQuestionUsingPOSTParams): __Observable<Array<AnswerRequestDto>> {
    return this.addAnswersToUserQuestionUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Array<AnswerRequestDto>)
    );
  }

  /**
   * Updates question by id
   * @param params The `QuestionnaireControllerService.ChangeQuestionUsingPUTParams` containing the following parameters:
   *
   * - `questionDto`: questionDto
   *
   * - `id`: id
   *
   * @return OK
   */
  changeQuestionUsingPUTResponse(params: QuestionnaireControllerService.ChangeQuestionUsingPUTParams): __Observable<__StrictHttpResponse<QuestionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.questionDto;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/question/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuestionDto>;
      })
    );
  }
  /**
   * Updates question by id
   * @param params The `QuestionnaireControllerService.ChangeQuestionUsingPUTParams` containing the following parameters:
   *
   * - `questionDto`: questionDto
   *
   * - `id`: id
   *
   * @return OK
   */
  changeQuestionUsingPUT(params: QuestionnaireControllerService.ChangeQuestionUsingPUTParams): __Observable<QuestionDto> {
    return this.changeQuestionUsingPUTResponse(params).pipe(
      __map(_r => _r.body as QuestionDto)
    );
  }

  /**
   * Deletes question by id
   * @param id id
   * @return OK
   */
  deleteQuestionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<Array<QuestionDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/question/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QuestionDto>>;
      })
    );
  }
  /**
   * Deletes question by id
   * @param id id
   * @return OK
   */
  deleteQuestionUsingDELETE(id: number): __Observable<Array<QuestionDto>> {
    return this.deleteQuestionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as Array<QuestionDto>)
    );
  }

  /**
   * Adds answer option to question
   * @param params The `QuestionnaireControllerService.AddAnswerUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `answerDto`: answerDto
   *
   * @return OK
   */
  addAnswerUsingPOSTResponse(params: QuestionnaireControllerService.AddAnswerUsingPOSTParams): __Observable<__StrictHttpResponse<QuestionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.answerDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/question/${encodeURIComponent(String(params.id))}/answer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuestionDto>;
      })
    );
  }
  /**
   * Adds answer option to question
   * @param params The `QuestionnaireControllerService.AddAnswerUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `answerDto`: answerDto
   *
   * @return OK
   */
  addAnswerUsingPOST(params: QuestionnaireControllerService.AddAnswerUsingPOSTParams): __Observable<QuestionDto> {
    return this.addAnswerUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as QuestionDto)
    );
  }
}

module QuestionnaireControllerService {

  /**
   * Parameters for deleteAnswerUsingDELETE
   */
  export interface DeleteAnswerUsingDELETEParams {

    /**
     * answer id
     */
    id: number;

    /**
     * delete all if true
     */
    forced?: boolean;
  }

  /**
   * Parameters for addAnswersToUserQuestionUsingPOST
   */
  export interface AddAnswersToUserQuestionUsingPOSTParams {

    /**
     * id
     */
    id: number;

    /**
     * answers
     */
    answers: Array<AnswerRequestDto>;
  }

  /**
   * Parameters for changeQuestionUsingPUT
   */
  export interface ChangeQuestionUsingPUTParams {

    /**
     * questionDto
     */
    questionDto: QuestionDto;

    /**
     * id
     */
    id: string;
  }

  /**
   * Parameters for addAnswerUsingPOST
   */
  export interface AddAnswerUsingPOSTParams {

    /**
     * id
     */
    id: number;

    /**
     * answerDto
     */
    answerDto: AnswerDto;
  }
}

export { QuestionnaireControllerService }
