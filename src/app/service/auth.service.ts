import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated():boolean {
    if(localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }
  }
}
