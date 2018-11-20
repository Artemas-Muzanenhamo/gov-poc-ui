import {Injectable} from '@angular/core';
import {License} from './license/license';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LicenseService {

  getLicensesURL = 'http://localhost:8082/licenses';
  licenses: License[];

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.getLicensesURL);
  }

  getLicense(id: number): Observable<License> {
    const idRef = {
      ref: id
    };

    if (id) {
      return this.http.post<License>(this.getLicensesURL + '/ref', idRef, this.httpOptions);
    }
  }

  addLicense(license: License): Observable<License> {
    return this.http.post<License>(this.getLicensesURL, license, this.httpOptions);
  }

}
