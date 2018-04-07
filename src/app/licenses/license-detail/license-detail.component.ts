import { Component, OnInit } from '@angular/core';
import {LicenseService} from '../license/license.service';
import {ActivatedRoute} from '@angular/router';
import {License} from '../license/license';

@Component({
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {

  license: License;

  constructor(private licenseService: LicenseService,
              private route: ActivatedRoute) {}

  getLicense (id: number) {
    return this.licenseService.getLicense(id);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.license = this.getLicense(id);
  }

}
