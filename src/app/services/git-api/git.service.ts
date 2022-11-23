import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class GitService {
    private url = "https://api.github.com/search/users";

    constructor(private http: HttpClient) {
    }


    searchUsers(searchStr: string = ''): Observable<any> {
        let params = new HttpParams();
        params.append('q', searchStr)
        return this.http.get(this.url + searchStr);
    }

    getGithubUsers(username): Observable<any> {
        return this.http.get(this.url + username);
    }

    async getGithubUsersToPromise(username): Promise<any> {
        const response = await this.http.get(this.url + username).toPromise();
        return response;
    }
}
