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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.license = this.route.snapshot.data['license'];
  }

}