import {Component} from '@angular/core';
import {LicenseService} from '../licenses.service';
import {License} from '../license/license';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  pageTitle: String = 'Add License Details';
  submitButton: String = 'Submit';
  backButton: String = 'Back';
  uploadButton: String = 'Upload';
  submitted: Boolean = false;


  constructor(
    private licenseService: LicenseService,
    private router: Router) { }

  protected license: License = new License();

  protected onSubmit() {
    this.submitted = true;

    this.license.expiryDate = moment
      .utc(this.license.expiryDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.license.dateOfIssue = moment
      .utc(this.license.dateOfIssue, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.license.dateOfBirth = moment
      .utc(this.license.dateOfBirth, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    this.addLicense(this.license);
  }

  private addLicense(license: License): void {
    this.licenseService.addLicense(license)
      .subscribe(
        data => {
          return this.router.navigate(['/licenses']);
        }
      );
  }
}
