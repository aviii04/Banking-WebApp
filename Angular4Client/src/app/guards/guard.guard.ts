import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){

      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
