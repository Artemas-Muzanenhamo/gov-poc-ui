import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Identity} from '../identity/identity';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DeleteIdentityDialogComponent} from '../delete-identity-dialog/delete-identity-dialog.component';
import {IdentityService} from '../identities.service';

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
  identityToBeDeleted: Identity;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private identityService: IdentityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        id => {
          this.identity = id['identity'];
        }
      );
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.identity;
    const dialogRef = this.dialog.open(DeleteIdentityDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.identityToBeDeleted = result;
          this.identityService.deleteIdentity(this.identityToBeDeleted)
            .subscribe(
              data => {
                return this.router.navigate(['/identities']);
              }
            );
        }
      });
  }

}
