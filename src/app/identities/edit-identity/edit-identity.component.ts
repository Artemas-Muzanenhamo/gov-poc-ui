import { Component, OnInit } from '@angular/core';
import {Identity} from '../identity/identity';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-identity',
  templateUrl: './edit-identity.component.html',
  styleUrls: ['./edit-identity.component.css']
})
export class EditIdentityComponent implements OnInit {

  pageTitle = 'Edit Identity Details';
  submitButton = 'Submit';
  viewIdentities = 'Back';
  identity: Identity;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.onIdentityRetrieved(this.route.snapshot.data['identity']);
  }

  onIdentityRetrieved(identity: Identity): void {
    this.identity = identity;
  }

}
