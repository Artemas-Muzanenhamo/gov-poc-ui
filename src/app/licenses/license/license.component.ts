import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LicenseService} from '../licenses.service';
import {License} from './license';

@Component({
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicensesComponent implements OnInit {

  pageTitle = 'License Detail';
  licenses: License[];

  constructor(private licenseService: LicenseService,
              private route: ActivatedRoute) {}

  getLicenses () {
    return this.licenseService.getLicenses();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.licenses = this.getLicenses();
  }
}