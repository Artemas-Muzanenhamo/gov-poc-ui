import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-identity-dialog',
  templateUrl: './delete-identity-dialog.component.html',
  styleUrls: ['./delete-identity-dialog.component.css']
})
export class DeleteIdentityDialogComponent implements OnInit {

  description: String = 'Delete Identity';
  YES: String = 'YES';
  NO: String = 'NO';

  constructor() { }

  ngOnInit() {
  }

}
