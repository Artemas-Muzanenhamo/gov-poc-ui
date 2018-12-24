import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Identity} from '../identity/identity';
import {IdentityService} from '../identities.service';

@Component({
  selector: 'app-delete-identity',
  templateUrl: './delete-identity.component.html',
  styleUrls: ['./delete-identity.component.css']
})
export class DeleteIdentityComponent implements OnInit {

  constructor(
    private router: Router,
    private identityService: IdentityService
  ) { }

  ngOnInit(): void {}

  public removeIdentity (identity: Identity): void {
    this.identityService.deleteIdentity(identity)
      .subscribe(
        data => {
          return this.router.navigate(['/identities']);
        }
      );
  }

}
