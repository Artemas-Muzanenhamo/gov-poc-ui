import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Identity} from '../identity/identity';

@Component({
  selector: 'app-identity-detail',
  templateUrl: './identity-detail.component.html',
  styleUrls: ['./identity-detail.component.css']
})
export class IdentityDetailComponent implements OnInit {

  identity: Identity;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        identity => {
          console.log(identity);
          this.identity = identity['identity'];
        }
      );
  }

}
