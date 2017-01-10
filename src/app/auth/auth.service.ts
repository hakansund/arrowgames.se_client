import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  public token: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {
      this.token = localStorage.getItem('id_token');
   }

   login(username: string, password: string): Observable<boolean> {
     return this.http.post('https://www.arrowgames.se/api/login', JSON.stringify({ username: username, password: password }))
              .map((res: Response) => {
                let token = res.json().token;
                if (token) {
                  this.token = token;
                  localStorage.setItem('id_token', token);
                  return true;
                } else {
                  return false;
                }
              });
   }

   logout() {
      this.token = null;
      localStorage.removeItem('id_token');
    }

    loggedIn() {
      return tokenNotExpired();
    }

    loggedInUsername(): string {
      return this.jwtHelper.decodeToken(this.token).username;
    }

}
