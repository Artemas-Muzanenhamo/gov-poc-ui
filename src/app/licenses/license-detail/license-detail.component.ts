import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {License} from '../license/license';

@Component({
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {

  licenses: License[];
  license: License;
  backButton: String = 'Back';
  editButton: String = 'Edit';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        license => {
          console.log(license);
          this.license = license['license'];
        }
      );
  }

}
