import { Component, OnInit } from '@angular/core';
import {LicenseService} from '../licenses.service';
import {ActivatedRoute} from '@angular/router';
import {License} from '../license/license';

@Component({
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {

  licenses: License[];

  constructor(private licenseService: LicenseService,
              private route: ActivatedRoute) {}

  getLicense (id: number) {
    return this.licenseService.getLicenses();
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.licenses = this.getLicense(id);
  }

}
