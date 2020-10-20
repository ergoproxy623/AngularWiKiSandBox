import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestRequestService  {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get('https://usersapitest.herokuapp.com/users', {}
    );
  }
}
