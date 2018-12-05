import {Component, OnInit} from '@angular/core';
import {Identity} from './identity';
import {IdentityService} from '../identities.service';

@Component({
  selector: 'app-identities',
  templateUrl: './identity.component.html'
})
export class IdentitiesComponent implements OnInit {

  identities: Identity[];

  constructor(private identityService: IdentityService) {}

  public getIdentities() {
    return this.identityService.getIdentities();
  }

  ngOnInit(): void {
    this.getIdentities()
      .subscribe(
        identities => this.identities = identities
      );
  }
}
