import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class IdentityService {

  // getIdentitiesURL = 'http://localhost:8082/identities';
  getIdentitiesURL = 'http://localhost:9999/identity-service/identities';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getIdentities(): Observable<Identity[]> {
    return this.http.get<Identity[]>(this.getIdentitiesURL);
  }

  getIdentity(idRef: Number): Observable<Identity> {
    if (idRef) {

      const ref = {
        idRef: idRef
      };

      return this.http.post<Identity>(this.getIdentitiesURL + '/reference', ref, this.httpOptions);

    }
  }

  addIdentity(identity: Identity): Observable<Identity> {
    return this.http.post<Identity>(this.getIdentitiesURL, identity, this.httpOptions);
  }
}
