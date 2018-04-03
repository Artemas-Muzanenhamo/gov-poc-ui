import {Component} from '@angular/core';
import {Identity} from './identity';

@Component({
  selector: 'app-identities',
  templateUrl: './identity.component.html'
})
export class IdentitiesComponent {
  identity: Identity = {
    id: 'MUZAn09876',
    identityRef: '6678944',
    name: 'Artemas',
    surname: 'Muzanenhamo',
    birthDate: '28/03/1990',
    villageOfOrigin: 'Mashayamombe',
    placeOfBirth: 'Zimbabwe',
    dateOfIssue: '01/01/2018'
  };
}
