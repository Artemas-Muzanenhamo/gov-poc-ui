import {Injectable} from '@angular/core';
import {License} from './license/license';

@Injectable()
export class LicenseService {

  licenses: License[] = [
    {
    id: '1234',
    identityRef: 'MUZAN1234',
    surname: 'Muzanenhamo',
    firstNames: 'Artemas',
    dateOfBirth: '28/03/1990',
    country: 'Zimbabwe',
    dateOfIssue: '01/01/2018',
    expiryDate: '01/01/2050',
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
      dateOfBirth: '17/04/1989',
      country: 'United Kingdom',
      dateOfIssue: '01/01/2018',
      expiryDate: '01/01/2050',
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
      dateOfBirth: '01/02/1958',
      country: 'Ghana',
      dateOfIssue: '01/01/2018',
      expiryDate: '01/01/2050',
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
      dateOfBirth: '14/10/1980',
      country: 'U.S.A',
      dateOfIssue: '01/01/2018',
      expiryDate: '01/01/2050',
      agency: 'DVLA',
      licenseNumber: 'WOODS2803901234',
      signatureImage: '01.PNG',
      address: '5 radstone court'
    }
  ];

  getLicenses() {
    return this.licenses;
  }

  getLicense(id: Number) {
    if (id) {
      return this.licenses.find(license => parseInt(license.id, 10) === id);
    }
  }

  constructor() { }
}
