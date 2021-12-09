/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ChatMessageDto } from '../models/chat-message-dto';
import { ChatStartMessageRequest } from '../models/chat-start-message-request';
import { CommonPagedRestResponseChatMessageDto } from '../models/common-paged-rest-response-chat-message-dto';
import { Notification } from '../models/notification';
import { ChatDTO } from '../models/chat-dto';

/**
 * Admin Abuse Messaging Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminAbuseMessagingControllerService extends __BaseService {
  static readonly processMessageUsingPOSTPath = '/abuses/chat/messages';
  static readonly startNewChatUsingPOSTPath = '/abuses/chat/messages/new';
  static readonly findMessagesByChatIdUsingGETPath = '/abuses/chat/messages/{chatId}';
  static readonly retainValidateChatsUsingGETPath = '/abuses/chat/validated';
  static readonly findChatDTOByAdvIdAndUserIdUsingGETPath = '/abuses/chat/{advertisementId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Adding message to existing chat
   * @param chatMessageDto chatMessageDto
   * @return OK
   */
  processMessageUsingPOSTResponse(chatMessageDto: ChatMessageDto): __Observable<__StrictHttpResponse<ChatMessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = chatMessageDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/abuses/chat/messages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChatMessageDto>;
      })
    );
  }
  /**
   * Adding message to existing chat
   * @param chatMessageDto chatMessageDto
   * @return OK
   */
  processMessageUsingPOST(chatMessageDto: ChatMessageDto): __Observable<ChatMessageDto> {
    return this.processMessageUsingPOSTResponse(chatMessageDto).pipe(
      __map(_r => _r.body as ChatMessageDto)
    );
  }

  /**
   * Starts new chat with first message with user
   * @param chatStartMessageDto chatStartMessageDto
   * @return OK
   */
  startNewChatUsingPOSTResponse(chatStartMessageDto: ChatStartMessageRequest): __Observable<__StrictHttpResponse<ChatMessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = chatStartMessageDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/abuses/chat/messages/new`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChatMessageDto>;
      })
    );
  }
  /**
   * Starts new chat with first message with user
   * @param chatStartMessageDto chatStartMessageDto
   * @return OK
   */
  startNewChatUsingPOST(chatStartMessageDto: ChatStartMessageRequest): __Observable<ChatMessageDto> {
    return this.startNewChatUsingPOSTResponse(chatStartMessageDto).pipe(
      __map(_r => _r.body as ChatMessageDto)
    );
  }

  /**
   * Get messages by chat id
   * @param params The `AdminAbuseMessagingControllerService.FindMessagesByChatIdUsingGETParams` containing the following parameters:
   *
   * - `chatId`: chatId
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findMessagesByChatIdUsingGETResponse(params: AdminAbuseMessagingControllerService.FindMessagesByChatIdUsingGETParams): __Observable<__StrictHttpResponse<CommonPagedRestResponseChatMessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/chat/messages/${encodeURIComponent(String(params.chatId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommonPagedRestResponseChatMessageDto>;
      })
    );
  }
  /**
   * Get messages by chat id
   * @param params The `AdminAbuseMessagingControllerService.FindMessagesByChatIdUsingGETParams` containing the following parameters:
   *
   * - `chatId`: chatId
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findMessagesByChatIdUsingGET(params: AdminAbuseMessagingControllerService.FindMessagesByChatIdUsingGETParams): __Observable<CommonPagedRestResponseChatMessageDto> {
    return this.findMessagesByChatIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as CommonPagedRestResponseChatMessageDto)
    );
  }

  /**
   * Filters chat notifications considering abuses' statuses
   * @param chatIds chatIds
   * @return OK
   */
  retainValidateChatsUsingGETResponse(chatIds: Array<number>): __Observable<__StrictHttpResponse<Notification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (chatIds || []).forEach(val => {if (val != null) __params = __params.append('chatIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/chat/validated`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Notification>;
      })
    );
  }
  /**
   * Filters chat notifications considering abuses' statuses
   * @param chatIds chatIds
   * @return OK
   */
  retainValidateChatsUsingGET(chatIds: Array<number>): __Observable<Notification> {
    return this.retainValidateChatsUsingGETResponse(chatIds).pipe(
      __map(_r => _r.body as Notification)
    );
  }

  /**
   * Get chat room major details by advertisement's details and recipient
   * @param params The `AdminAbuseMessagingControllerService.FindChatDTOByAdvIdAndUserIdUsingGETParams` containing the following parameters:
   *
   * - `advertisementType`: advertisementType
   *
   * - `advertisementId`: advertisementId
   *
   * @return OK
   */
  findChatDTOByAdvIdAndUserIdUsingGETResponse(params: AdminAbuseMessagingControllerService.FindChatDTOByAdvIdAndUserIdUsingGETParams): __Observable<__StrictHttpResponse<ChatDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.advertisementType != null) __params = __params.set('advertisementType', params.advertisementType.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/abuses/chat/${encodeURIComponent(String(params.advertisementId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChatDTO>;
      })
    );
  }
  /**
   * Get chat room major details by advertisement's details and recipient
   * @param params The `AdminAbuseMessagingControllerService.FindChatDTOByAdvIdAndUserIdUsingGETParams` containing the following parameters:
   *
   * - `advertisementType`: advertisementType
   *
   * - `advertisementId`: advertisementId
   *
   * @return OK
   */
  findChatDTOByAdvIdAndUserIdUsingGET(params: AdminAbuseMessagingControllerService.FindChatDTOByAdvIdAndUserIdUsingGETParams): __Observable<ChatDTO> {
    return this.findChatDTOByAdvIdAndUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as ChatDTO)
    );
  }
}

module AdminAbuseMessagingControllerService {

  /**
   * Parameters for findMessagesByChatIdUsingGET
   */
  export interface FindMessagesByChatIdUsingGETParams {

    /**
     * chatId
     */
    chatId: number;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for findChatDTOByAdvIdAndUserIdUsingGET
   */
  export interface FindChatDTOByAdvIdAndUserIdUsingGETParams {

    /**
     * advertisementType
     */
    advertisementType: string;

    /**
     * advertisementId
     */
    advertisementId: number;
  }
}

export { AdminAbuseMessagingControllerService }
