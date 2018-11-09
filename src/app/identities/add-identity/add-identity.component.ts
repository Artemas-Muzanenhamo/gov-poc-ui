import { Component, OnInit } from '@angular/core';
import {IdentityService} from '../identities.service';
import {Identity} from '../identity/identity';
import {Router} from '@angular/router';

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
