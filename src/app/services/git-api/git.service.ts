import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GitService {
  url = 'https://api.github.com/search/users?q=';
  constructor(private http: HttpClient) { }


  searchUsers(searchStr): Observable<any> {
    return   this.http.get(this.url + searchStr);
  }

  getGithubUsers(username): Observable<any> {
      return this.http.get(this.url + username);
  }
}
