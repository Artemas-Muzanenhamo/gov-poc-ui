import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class IdentityService {

  getIdentitiesURL = 'http://localhost:8080/identities';
  identity: Identity;

  // identities: Identity[] = [
  //   {
  //     id: 'MUZAn09876',
  //     identityRef: '6678944',
  //     name: 'Artemas',
  //     surname: 'Muzanenhamo',
  //     birthDate: moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
  //     villageOfOrigin: 'Mashayamombe',
  //     placeOfBirth: 'Zimbabwe',
  //     dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  //   },
  //   {
  //     id: 'TAKUn09876',
  //     identityRef: '9478966',
  //     name: 'Takudzwa',
  //     surname: 'Matse',
  //     birthDate: moment.utc('19/01/1980', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
  //     villageOfOrigin: 'Mashayamombe',
  //     placeOfBirth: 'Zimbabwe',
  //     dateOfIssue: moment.utc('18/05/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  //   },
  //   {
  //     id: 'THOMn09876',
  //     identityRef: '9978933',
  //     name: 'Thomas',
  //     surname: 'Smith',
  //     birthDate: moment.utc('05/05/1989', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
  //     villageOfOrigin: 'Mashayamombe',
  //     placeOfBirth: 'Zimbabwe',
  //     dateOfIssue: moment.utc('20/03/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  //   },
  //   {
  //     id: 'GIANn09876',
  //     identityRef: '1178900',
  //     name: 'Giannis',
  //     surname: 'Marks',
  //     birthDate: moment.utc('12/06/2000', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
  //     villageOfOrigin: 'Mashayamombe',
  //     placeOfBirth: 'Zimbabwe',
  //     dateOfIssue: moment.utc('06/04/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  //   }
  // ];

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
