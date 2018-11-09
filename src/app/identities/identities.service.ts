import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class IdentityService {

  getIdentitiesURL = 'http://localhost:8082/identities';

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
    identity = this.formatIdentityDates(identity);
    return this.http.post<Identity>(this.getIdentitiesURL, identity, this.httpOptions);
  }

  formatIdentityDates(identity: Identity): Identity {
    identity.birthDate = moment
      .utc(identity.birthDate, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    identity.dateOfIssue = moment
      .utc(identity.dateOfIssue, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    return identity;
  }
}
