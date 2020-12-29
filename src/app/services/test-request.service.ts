import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserDto} from "../classDTO/userDto/userDto";

@Injectable({
    providedIn: 'root'
})
export class TestRequestService {

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<any> {
        const headers = new HttpHeaders( { MyTestHeader: Math.random().toString(10)} );
        let params = new HttpParams();
        params = params.append('filter', 'Vasja');
        return this.http.get('https://usersapitest.herokuapp.com/users', {
                headers,
                params
            }
        );
    }
}
