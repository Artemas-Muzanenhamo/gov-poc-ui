import { Component, OnInit } from '@angular/core';
import {Identity} from '../identity/identity';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-identity',
  templateUrl: './edit-identity.component.html',
  styleUrls: ['./edit-identity.component.css']
})
export class EditIdentityComponent implements OnInit {

  pageTitle = 'Edit Identity Details';
  submitButton = 'Submit';
  backButton = 'Back';
  identity: Identity;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onIdentityRetrieved(this.route.snapshot.data['identity']);
  }

  onIdentityRetrieved(identity: Identity): void {
    identity.birthDate = moment.utc(identity.birthDate, 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0];
    identity.dateOfIssue = moment.utc(identity.dateOfIssue, 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0];
    this.identity = identity;
  }

}
