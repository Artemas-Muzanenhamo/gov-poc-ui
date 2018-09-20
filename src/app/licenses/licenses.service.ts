import {Injectable} from '@angular/core';
import {License} from './license/license';
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LicenseService {

  getLicensesURL = 'http://localhost:8081/licenses';
  licensesArr: License[];
  // getLicensesURL = 'https://jsonplaceholder.typicode.com/posts';

  licenses: License[] = [
    {
    id: '1234',
    identityRef: 'MUZAN1234',
    surname: 'Muzanenhamo',
    firstNames: 'Artemas',
    dateOfBirth: moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    country: 'Zimbabwe',
    dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    agency: 'DVLA',
    licenseNumber: 'MUZAN2803901234',
    signatureImage: '01.PNG',
    address: '5 radstone court'
    },
    {
      id: '7744',
      identityRef: 'SMITH7744',
      surname: 'Smith',
      firstNames: 'John',
      dateOfBirth: moment.utc('17/04/1989', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      country: 'United Kingdom',
      dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      agency: 'DVLA',
      licenseNumber: 'SMITH2803901234',
      signatureImage: '01.PNG',
      address: '5 radstone court'
    },
    {
      id: '2334',
      identityRef: 'TERREL2334',
      surname: 'Terrel',
      firstNames: 'Michael',
      dateOfBirth: moment.utc('01/02/1958', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      country: 'Ghana',
      dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      agency: 'DVLA',
      licenseNumber: 'TERR2803901234',
      signatureImage: '01.PNG',
      address: '5 radstone court'
    },
    {
      id: '9054',
      identityRef: 'WOODS9054',
      surname: 'Woods',
      firstNames: 'Tiger',
      dateOfBirth: moment.utc('14/10/1980', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      country: 'U.S.A',
      dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      agency: 'DVLA',
      licenseNumber: 'WOODS2803901234',
      signatureImage: '01.PNG',
      address: '5 radstone court'
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getLicenses() {
    // return this.licenses;
    return this.http.get<License[]>(this.getLicensesURL)
      .subscribe({
        next(num) {
          // console.log(num);
          num.forEach(function (element) {
            console.log('DEMO ' + element);
          });
        },
        error(err) {console.log(err); }
      });
  }

  getLicense(id: Number): Observable<License> {
    if (id) {
      return this.http.get<License>(this.getLicensesURL);
    }
  }

}
