import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IdentityData} from '../identity-detail/identity-data';

@Component({
  selector: 'app-delete-identity-dialog',
  templateUrl: './delete-identity-dialog.component.html',
  styleUrls: ['./delete-identity-dialog.component.css']
})
export class DeleteIdentityDialogComponent implements OnInit {

  description: String = 'Delete Identity';
  YES: String = 'YES';
  NO: String = 'NO';

  constructor(
    public dialogRef: MatDialogRef<DeleteIdentityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IdentityData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
