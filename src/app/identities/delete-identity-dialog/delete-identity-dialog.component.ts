import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

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
    public dialogRef: MatDialogRef<DeleteIdentityDialogComponent>
  ) { }

  ngOnInit() { }


  onNoClick(): void {
    this.dialogRef.close();
  }


}
