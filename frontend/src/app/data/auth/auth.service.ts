import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export type AuthError = {
  email: string[],
  password: string[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post("http://localhost:5000/auth/signin", {email, password});
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  logout() {
    
  }
}
