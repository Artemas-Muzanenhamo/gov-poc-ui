import {Component, OnInit} from '@angular/core';
import {LicenseService} from '../licenses.service';
import {License} from './license';

@Component({
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicensesComponent implements OnInit {

  pageTitle = 'License Detail';
  licenses: License[];
  editButton = 'Edit';

  constructor(private licenseService: LicenseService) {}

  getLicenses () {
    return this.licenseService.getLicenses();
  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.params['id'];
    this.licenses = this.getLicenses();
  }
}
