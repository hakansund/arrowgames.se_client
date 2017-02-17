import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Sheet } from './sheet';

@Injectable()
export class SheetsService {

  private sheetsUrl = 'https://www.arrowgames.se/api/sheets';

  constructor (private authHttp: AuthHttp) { }

  getSheet (id: string): Observable<Sheet> {
    return this.authHttp.get(this.sheetsUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getSheets (): Observable<Sheet[]> {
    return this.authHttp.get(this.sheetsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addSheet (sheet: Sheet): Observable<Sheet> {
    return this.authHttp.post(this.sheetsUrl, JSON.stringify(sheet))
                    .map((res: Response) => (res.json()))
                    .catch(this.handleError);
  }

  deleteSheet (id: string): Observable<Sheet> {
    return this.authHttp.delete(this.sheetsUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateSheet (sheet: Sheet): Observable<Sheet> {
    let id = sheet._id;
    delete sheet._id;
    return this.authHttp.patch(this.sheetsUrl + '/' + id, JSON.stringify(sheet))
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



