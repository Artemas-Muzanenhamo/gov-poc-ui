import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LicenseService} from './license.service';
import {License} from './license';

@Component({
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicensesComponent implements OnInit {

  pageTitle = 'License Detail';
  license: License;

  constructor(private licenseService: LicenseService,
              private route: ActivatedRoute) {}

   getLicense (id: number) {
    return this.licenseService.getLicense(id);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.license = this.getLicense(id);
  }
}
