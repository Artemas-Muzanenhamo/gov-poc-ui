import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './add-identity.component.html',
  styleUrls: ['./add-identity.component.css']
})
export class AddIdentityComponent implements OnInit {

  pageTitle = 'Add Identity Details';
  submitButton = 'submit';
  viewIdentities = 'View Identities';

  constructor() { }

  ngOnInit() { }

}
