import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../identities.service';
import {Identity} from '../identity/identity';

@Component({
  templateUrl: './add-identity.component.html',
  providers: [IdentityService],
  styleUrls: ['./add-identity.component.css']
})
export class AddIdentityComponent implements OnInit {

  pageTitle = 'Add Identity Details';
  submitButton = 'submit';
  backButton = 'Back';

  submitted = false;

  constructor(private identityService: IdentityService) { }

  identity = new Identity();

  onSubmit() {
    this.submitted = true;
    this.addIdentity(this.identity);
  }

  addIdentity(identity: Identity): void {
    this.identityService.addIdentity(identity);
  }

  ngOnInit() { }

}
