import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate  {

  constructor(
    private router:Router,
    private auth: AuthService,
  ) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      if (this.router.url.includes('confirmpassword')) {
        return false;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
    return true;
  }
}
