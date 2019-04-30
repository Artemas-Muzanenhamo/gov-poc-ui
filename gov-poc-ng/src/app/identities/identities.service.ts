import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class IdentityService {

  getIdentitiesURL = 'http://localhost:9999/identity-service/identities';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getIdentities(): Observable<Identity[]> {
    return this.http.get<Identity[]>(this.getIdentitiesURL);
  }

  public getIdentity(idRef: Number): Observable<Identity> {
    if (idRef) {

      const ref = {
        idRef: idRef
      };

      return this.http.post<Identity>(this.getIdentitiesURL + '/reference', ref, this.httpOptions);

    }
  }

  public addIdentity(identity: Identity): Observable<Identity> {
    return this.http.post<Identity>(this.getIdentitiesURL, identity, this.httpOptions);
  }

  public updateIdentity(identity: Identity): Observable<Identity> {
    return this.http.put<Identity>(this.getIdentitiesURL, identity, this.httpOptions);
  }

  deleteIdentity(identity: Identity): Observable<Identity> {

    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: identity
    };

    return this.http.delete<Identity>(this.getIdentitiesURL, httpOptions2);
  }
}
