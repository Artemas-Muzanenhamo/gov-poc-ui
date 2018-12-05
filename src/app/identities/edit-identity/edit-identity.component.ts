import {Component, OnInit} from '@angular/core';
import {Identity} from '../identity/identity';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {IdentityService} from '../identities.service';

@Component({
  selector: 'app-edit-identity',
  templateUrl: './edit-identity.component.html',
  styleUrls: ['./edit-identity.component.css']
})
export class EditIdentityComponent implements OnInit {

  pageTitle: String = 'Edit Identity Details';
  submitButton: String = 'Submit';
  backButton: String = 'Back';
  identity: Identity;
  submitted: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private identityService: IdentityService
  ) { }

  ngOnInit(): void {
    this.onIdentityRetrieved(this.route.snapshot.data['identity']);
  }

  public onIdentityRetrieved(identity: Identity): void {
    identity.birthDate = moment
      .utc(identity.birthDate, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    identity.dateOfIssue = moment
      .utc(identity.dateOfIssue, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    this.identity = identity;
  }

  public onSubmit() {
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

    this.updateIdentity(this.identity);
  }

  protected updateIdentity(identity: Identity) {
    this.identityService.updateIdentity(identity)
      .subscribe(
        data => {
          return this.router.navigate(['/identities']);
        }
      );
  }

}
