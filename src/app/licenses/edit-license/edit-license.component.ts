import {Component, OnInit} from '@angular/core';
import {License} from '../license/license';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {LicenseService} from '../licenses.service';

@Component({
  templateUrl: './edit-license.component.html',
  styleUrls: ['./edit-license.component.css']
})
export class EditLicenseComponent implements OnInit {

  pageTitle: String = 'Edit License Details';
  submitButton: String = 'Submit';
  backButton: String = 'Back';
  license: License;
  uploadButton: String = 'Upload';
  submitted: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private licenseService: LicenseService
  ) { }

  ngOnInit(): void {
    this.onLicenseRetrieved(this.route.snapshot.data['license']);
  }

  private onLicenseRetrieved(license: License): void {
    license.dateOfBirth = moment
      .utc(license.dateOfBirth, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    license.dateOfIssue = moment
      .utc(license.dateOfIssue, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    license.expiryDate = moment
      .utc(license.expiryDate, 'DD/MM/YYYY', true)
      .toDate()
      .toISOString()
      .split('T')[0];

    this.license = license;
  }

  protected onSubmit() {
    this.submitted = true;

    this.license.dateOfBirth = moment
      .utc(this.license.dateOfBirth, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.license.dateOfIssue = moment
      .utc(this.license.dateOfIssue, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.license.expiryDate = moment
      .utc(this.license.expiryDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.updateLicense(this.license);
  }

  private updateLicense(license: License): void {
    this.licenseService.updateLicense(license)
      .subscribe(
        data => {
          return this.router.navigate(['/licenses']);
        }
      );
  }
}
