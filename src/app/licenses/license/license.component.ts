import {Component, OnInit} from '@angular/core';
import {LicenseService} from '../licenses.service';
import {License} from './license';

@Component({
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicensesComponent implements OnInit {

  pageTitle: String = 'License Detail';
  editButton: String = 'Edit';
  licenses: License[];

  constructor(private licenseService: LicenseService) {}

  public getLicenses () {
    return this.licenseService.getLicenses()
      .subscribe(
        licenses => this.licenses = licenses,
        error => console.log(error)
      );
  }

  ngOnInit(): void {
    this.getLicenses();
  }
}
