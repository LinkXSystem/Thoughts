import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const login = window.sessionStorage.getItem('login');

    if (!login) {
      this.router.navigate(['/blog']);
      return false;
    }

    return true;
  }
}
