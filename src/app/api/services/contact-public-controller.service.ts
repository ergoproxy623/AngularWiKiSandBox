/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactEmailDto } from '../models/contact-email-dto';

/**
 * Contact Public Controller
 */
@Injectable({
  providedIn: 'root',
})
class ContactPublicControllerService extends __BaseService {
  static readonly processContactEmailUsingPOSTPath = '/public/email/contact';
  static readonly processFeedbackEmailUsingPOSTPath = '/public/email/feedback';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Processes support email
   * @param contactEmailDto contactEmailDto
   */
  processContactEmailUsingPOSTResponse(contactEmailDto: ContactEmailDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = contactEmailDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/email/contact`,
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
   * Processes support email
   * @param contactEmailDto contactEmailDto
   */
  processContactEmailUsingPOST(contactEmailDto: ContactEmailDto): __Observable<null> {
    return this.processContactEmailUsingPOSTResponse(contactEmailDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Processes feedback email
   * @param contactEmailDto contactEmailDto
   */
  processFeedbackEmailUsingPOSTResponse(contactEmailDto: ContactEmailDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = contactEmailDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/public/email/feedback`,
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
   * Processes feedback email
   * @param contactEmailDto contactEmailDto
   */
  processFeedbackEmailUsingPOST(contactEmailDto: ContactEmailDto): __Observable<null> {
    return this.processFeedbackEmailUsingPOSTResponse(contactEmailDto).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ContactPublicControllerService {
}

export { ContactPublicControllerService }
