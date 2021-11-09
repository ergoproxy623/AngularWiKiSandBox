import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ConfigServiceService} from './config-service.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {TestRequestService} from './test-request.service';
import { interval } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private configService: ConfigServiceService,
        private testRequest: TestRequestService
    ) {
    this.testRequest.getUsers()
    .pipe(

        takeUntil(interval(1000))
    ).subscribe( data => {
        console.log(data);
        
    } )
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.configService.getConfig().pipe(
        switchMap( res => {
            if ( res.adminName) {
                return of(true);
            } else  {
                return of(false);
            }
        })
    );

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(childRoute, state);
    }
}
