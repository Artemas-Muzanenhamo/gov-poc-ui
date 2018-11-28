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

  pageTitle: String = 'Add Identity Details';
  submitButton: String = 'Submit';
  backButton: String = 'Back';

  submitted: Boolean = false;

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) { }

  identity: Identity = new Identity();

  public onSubmit(): void {
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

  private addIdentity(identity: Identity): void {
    this.identityService.addIdentity(identity)
      .subscribe(
        data => {
          return this.router.navigate(['/identities']);
        }
      );
  }

  ngOnInit() { }

}
