import {Component} from '@angular/core';
import {LicenseService} from '../licenses.service';
import {License} from '../license/license';

@Component({
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  pageTitle = 'Add License Details';
  submitButton = 'Submit';
  backButton = 'Back';
  uploadButton = 'Upload';


  constructor(licenseService: LicenseService) { }

  onSubmit() {}

  addLicense(license: License) : void {

  }
}
