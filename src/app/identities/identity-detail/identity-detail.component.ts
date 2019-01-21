import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Identity} from '../identity/identity';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-identity-detail',
  templateUrl: './identity-detail.component.html',
  styleUrls: ['./identity-detail.component.css']
})
export class IdentityDetailComponent implements OnInit {

  identity: Identity;
  backButton: String = 'Back';
  editButton: String = 'Edit';
  deleteButton: String = 'Delete';

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        identity => {
          this.identity = identity['identity'];
        }
      );
  }

}
