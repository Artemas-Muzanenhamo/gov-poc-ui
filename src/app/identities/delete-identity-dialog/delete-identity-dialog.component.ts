import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-identity-dialog',
  templateUrl: './delete-identity-dialog.component.html',
  styleUrls: ['./delete-identity-dialog.component.css']
})
export class DeleteIdentityDialogComponent implements OnInit {

  description: String = 'Identity Deletion works!';

  constructor() { }

  ngOnInit() {
  }

}
