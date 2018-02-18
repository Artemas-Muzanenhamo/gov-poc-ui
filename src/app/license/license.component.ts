import {Component} from '@angular/core';
import {License} from './license';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent {
  license: License = {
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
  };
}
