import {Component, OnInit} from '@angular/core';
import {License} from '../license/license';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './edit-license.component.html',
  styleUrls: ['./edit-license.component.css']
})
export class EditLicenseComponent implements OnInit {

  pageTitle = 'Edit License Details';
  submitButton = 'Submit';
  backButton = 'Back';
  license: License;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onLicenseRetrieved(this.route.snapshot.data['license']);
  }

  onLicenseRetrieved(license: License): void {
    this.license = license;

    if (Number(this.license.id) === 0) {
      this.pageTitle = 'Add License Details';
    } else {
      this.pageTitle = 'Edit License Details';
    }
  }
}
