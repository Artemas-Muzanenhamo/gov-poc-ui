import {Component} from '@angular/core';
import {LicenseService} from '../licenses.service';
import {License} from '../license/license';

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


  constructor(private licenseService: LicenseService) { }

  protected license: License = new License();

  protected onSubmit() {
    this.submitted = true;
    this.addLicense(this.license);
  }

  private addLicense(license: License): void {

  }
}
