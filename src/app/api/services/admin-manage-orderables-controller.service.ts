/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ItemReorderingRequest } from '../models/item-reordering-request';

/**
 * Admin Manage Orderables Controller
 */
@Injectable({
  providedIn: 'root',
})
class AdminManageOrderablesControllerService extends __BaseService {
  static readonly reorderItemUsingPATCHPath = '/manage/orderables';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Moves up/down sorted item and subsequent items, faqItemReferenceType (category, question, answer), (only single step (1/-1) supported
   * @param request request
   */
  reorderItemUsingPATCHResponse(request: ItemReorderingRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/manage/orderables`,
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
   * Moves up/down sorted item and subsequent items, faqItemReferenceType (category, question, answer), (only single step (1/-1) supported
   * @param request request
   */
  reorderItemUsingPATCH(request: ItemReorderingRequest): __Observable<null> {
    return this.reorderItemUsingPATCHResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AdminManageOrderablesControllerService {
}

export { AdminManageOrderablesControllerService }
