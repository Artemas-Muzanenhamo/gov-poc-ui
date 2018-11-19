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
    const identityFormatted = this.formatIdentityDates(identity);
    return this.http.post<Identity>(this.getIdentitiesURL, identityFormatted, this.httpOptions);
  }

  formatIdentityDates(identity: Identity): Identity {
    // TODO - Failing to add Identity here. Changed identity to add formatted dates but that's not working as expected
    identity.birthDate = moment
      .utc(identity.birthDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    identity.dateOfIssue = moment
      .utc(identity.dateOfIssue, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    return identity;
  }
}
