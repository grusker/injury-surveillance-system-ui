import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthanticated = false;

  constructor() { }

  authenticateUser(email: String, password: String) {
    console.log(this.isAuthanticated);
    this.isAuthanticated = true;

  }

  saveToken() {

  }

  isAuthenticated(): Boolean {
    // check if the user is authenticated based on the token
    return this.isAuthanticated;
  }
}
