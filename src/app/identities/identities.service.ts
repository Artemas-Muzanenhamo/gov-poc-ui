import {Injectable} from '@angular/core';
import {Identity} from './identity/identity';

@Injectable()
export class IdentityService {
  identities: Identity[] = [
    {
      id: 'MUZAn09876',
      identityRef: '6678944',
      name: 'Artemas',
      surname: 'Muzanenhamo',
      birthDate: '28/03/1990',
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: '01/01/2018'
    },
    {
      id: 'MUZAn09876',
      identityRef: '6678944',
      name: 'Artemas',
      surname: 'Muzanenhamo',
      birthDate: '28/03/1990',
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: '01/01/2018'
    },
    {
      id: 'MUZAn09876',
      identityRef: '6678944',
      name: 'Artemas',
      surname: 'Muzanenhamo',
      birthDate: '28/03/1990',
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: '01/01/2018'
    },
    {
      id: 'MUZAn09876',
      identityRef: '6678944',
      name: 'Artemas',
      surname: 'Muzanenhamo',
      birthDate: '28/03/1990',
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: '01/01/2018'
    }
  ];

  getIdentities() {
    return this.identities;
  }

  getIdentity(id: Number) {
    if (id) {
      return this.identities.find(identity => parseInt(identity.id, 10) === id);
    }
  }
}
