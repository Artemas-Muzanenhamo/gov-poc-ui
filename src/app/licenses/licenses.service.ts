import {Injectable} from '@angular/core';
import {License} from './license/license';
import * as moment from 'moment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LicenseService {

  getLicensesURL = 'http://localhost:8080/licenses';
  licenses: License[];

  constructor(
    private http: HttpClient
  ) { }

  getLicenses() {
    return this.http.get<License[]>(this.getLicensesURL);
  }

  getLicense(id: number): Observable<License> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const idRef = {
      ref: id
    };

    if (id) {
      return this.http.post<License>(this.getLicensesURL + '/ref', idRef, httpOptions);
    }
  }

}
