import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Rule } from './rule';

@Injectable()
export class RulesService {

  private rulesUrl = 'https://www.arrowgames.se/api/rules';

  constructor(private authHttp: AuthHttp) { }

  getRule (id: string): Observable<Rule> {
    return this.authHttp.get(this.rulesUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getRules (): Observable<Rule[]> {
    return this.authHttp.get(this.rulesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addRule (rule: Rule): Observable<Rule> {
    return this.authHttp.post(this.rulesUrl, JSON.stringify(rule))
                    .map((res: Response) => (res.json()))
                    .catch(this.handleError);
  }

  deleteRule (id: string): Observable<Rule> {
    return this.authHttp.delete(this.rulesUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateRule (rule: Rule): Observable<Rule> {
    return this.authHttp.patch(this.rulesUrl + '/' + rule._id, JSON.stringify({ title: rule.title, text: rule.text }))
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
