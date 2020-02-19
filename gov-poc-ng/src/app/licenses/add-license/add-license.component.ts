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

  public license: License = new License();

  public onSubmit() {
    this.submitted = true;
    this.license.dateOfBirth = this.utoToLocalDateString(this.license.dateOfBirth);
    this.license.dateOfIssue = this.utoToLocalDateString(this.license.dateOfIssue);
    this.license.expiryDate = this.utoToLocalDateString(this.license.expiryDate);
    this.addLicense(this.license);
  }

  private utoToLocalDateString(utcDate: string): string {
    return moment
      .utc(utcDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];
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
