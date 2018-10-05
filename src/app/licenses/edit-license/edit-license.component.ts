import {Component, OnInit} from '@angular/core';
import {License} from '../license/license';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: './edit-license.component.html',
  styleUrls: ['./edit-license.component.css']
})
export class EditLicenseComponent implements OnInit {

  pageTitle = 'Edit License Details';
  submitButton = 'Submit';
  backButton = 'Back';
  license: License;
  uploadButton = 'Upload';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onLicenseRetrieved(this.route.snapshot.data['license']);
  }

  onLicenseRetrieved(license: License): void {
    license.dateOfBirth = moment
      .utc(license.dateOfBirth, 'DD/MM/YYYY', true)
      .toDate().toISOString().split('T')[0];

    license.dateOfIssue = moment
      .utc(license.dateOfIssue, 'DD/MM/YYYY', true)
      .toDate().toISOString().split('T')[0];

    license.expiryDate = moment
      .utc(license.expiryDate, 'DD/MM/YYYY', true)
      .toDate().toISOString().split('T')[0];

    this.license = license;
  }
}
