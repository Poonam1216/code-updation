import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService   {

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
