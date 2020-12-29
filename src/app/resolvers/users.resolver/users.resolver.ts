import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TestRequestService} from '../../services/test-request.service';
@Injectable({
    providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
    constructor(private testService: TestRequestService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.testService.getUsers();
    }

}
