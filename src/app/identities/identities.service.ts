import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class IdentityService {

  getIdentitiesURL = 'http://localhost:8080/identities';
  identity: Identity;

  constructor(private http: HttpClient) {
  }

  getIdentities(): Observable<Identity[]> {
    return this.http.get<Identity[]>(this.getIdentitiesURL);
  }

  getIdentity(idRef: Number): Observable<Identity> {
    if (idRef) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      const ref = {
        idRef: idRef
      };

      return this.http.post<Identity>(this.getIdentitiesURL + '/reference', ref, httpOptions);

    }
  }
}
