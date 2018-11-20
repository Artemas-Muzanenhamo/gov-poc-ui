import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../identities.service';
import {Identity} from '../identity/identity';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: './add-identity.component.html',
  providers: [IdentityService],
  styleUrls: ['./add-identity.component.css']
})
export class AddIdentityComponent implements OnInit {

  pageTitle = 'Add Identity Details';
  submitButton = 'Submit';
  backButton = 'Back';

  submitted = false;

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) { }

  identity = new Identity();

  onSubmit() {
    this.submitted = true;

    this.identity.birthDate = moment
      .utc(this.identity.birthDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.identity.dateOfIssue = moment
      .utc(this.identity.dateOfIssue, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.addIdentity(this.identity);
  }

  addIdentity(identity: Identity): void {
    this.identityService.addIdentity(identity)
      .subscribe(
        data => {
          return this.router.navigate(['/identities']);
        }
      );
  }

  ngOnInit() { }

}
