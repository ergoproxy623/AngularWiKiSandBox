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
class EmployeeFavouriteControllerService extends __BaseService {
  static readonly toggleFavouriteEmployeePath = '/employees/favourites/{employeeId}';
  static readonly getUsersFavouriteEmployeesPath = '/employees/favourites';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param employeeId undefined
   */
  toggleFavouriteEmployeeResponse(employeeId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/employees/favourites/${encodeURIComponent(String(employeeId))}`,
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
   * @param employeeId undefined
   */
  toggleFavouriteEmployee(employeeId: number): __Observable<null> {
    return this.toggleFavouriteEmployeeResponse(employeeId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeFavouriteControllerService.GetUsersFavouriteEmployeesParams` containing the following parameters:
   *
   * - `size`:
   *
   * - `page`:
   */
  getUsersFavouriteEmployeesResponse(params: EmployeeFavouriteControllerService.GetUsersFavouriteEmployeesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/employees/favourites`,
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
   * @param params The `EmployeeFavouriteControllerService.GetUsersFavouriteEmployeesParams` containing the following parameters:
   *
   * - `size`:
   *
   * - `page`:
   */
  getUsersFavouriteEmployees(params: EmployeeFavouriteControllerService.GetUsersFavouriteEmployeesParams): __Observable<null> {
    return this.getUsersFavouriteEmployeesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeFavouriteControllerService {

  /**
   * Parameters for getUsersFavouriteEmployees
   */
  export interface GetUsersFavouriteEmployeesParams {
    size?: number;
    page?: number;
  }
}

export { EmployeeFavouriteControllerService }
