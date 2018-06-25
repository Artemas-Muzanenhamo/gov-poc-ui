import {Component, OnInit} from '@angular/core';
import {Identity} from './identity';
import {IdentityService} from '../identities.service';

@Component({
  selector: 'app-identities',
  templateUrl: './identity.component.html'
})
export class IdentitiesComponent implements OnInit {

  identities: Identity[];

  // identity: Identity = {
  //   id: 'MUZAn09876',
  //   identityRef: '6678944',
  //   name: 'Artemas',
  //   surname: 'Muzanenhamo',
  //   birthDate: '28/03/1990',
  //   villageOfOrigin: 'Mashayamombe',
  //   placeOfBirth: 'Zimbabwe',
  //   dateOfIssue: '01/01/2018'
  // };

  constructor(private identityService: IdentityService) {}

  getIdentities() {
    return this.identityService.getIdentities();
  }

  ngOnInit(): void {
    this.identities = this.getIdentities();
  }
}
