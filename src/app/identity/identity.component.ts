import {Component} from '@angular/core';
import {Identity} from './identity';

@Component({
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {
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
