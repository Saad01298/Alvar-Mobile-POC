import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router) {}

  

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = sessionStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      // If user is not logged in, navigate to login page or any other appropriate route
      this.router.navigate(['/login']);
      return false;
    }

    // Allow access to child routes if user is logged in
    return true;
  }

  setLoginStatus() {
    sessionStorage.setItem("loggedIn", "true");
  }
}
