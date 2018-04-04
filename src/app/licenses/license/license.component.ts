import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LicenseService} from './license.service';

@Component({
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicensesComponent implements OnInit {

  pageTitle = 'License Detail';

  constructor(private licenseService: LicenseService,
              private route: ActivatedRoute) {}

  getLicense(id: number) {
    this.licenseService.getLicense(id);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.getLicense(id);
  }
}
