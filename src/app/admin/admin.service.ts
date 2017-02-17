import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { User } from './user';

@Injectable()
export class AdminService {

  private usersUrl = 'https://www.arrowgames.se/api/users';

  constructor(private authHttp: AuthHttp) { }

  getUser (id: string): Observable<User> {
    return this.authHttp.get(this.usersUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getUsers (): Observable<User[]> {
    return this.authHttp.get(this.usersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addUser (user: User): Observable<User> {
    return this.authHttp.post(this.usersUrl, JSON.stringify(user))
                    .map((res: Response) => (res.json()))
                    .catch(this.handleError);
  }

  deleteUser (id: string): Observable<User> {
    return this.authHttp.delete(this.usersUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.tostring();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
