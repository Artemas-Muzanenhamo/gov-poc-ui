import {NgModule} from '@angular/core';
import {EditIdentityComponent} from './edit-identity/edit-identity.component';
import {AddIdentityComponent} from './add-identity/add-identity.component';
import {IdentitiesComponent} from './identity/identity.component';
import {IdentityComponent} from './identities.component';
import {RouterModule} from '@angular/router';
import {IdentityService} from './identities.service';
import {Identity} from './identity/identity';
import {CommonModule} from '@angular/common';
import {IdentityResolver} from './identity-resolver.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IdentityDetailComponent } from './identity-detail/identity-detail.component';
import {MatDialogContent, MatDialogModule, MatFormField, MatFormFieldModule, MatInputModule} from '@angular/material';
import { DeleteIdentityDialogComponent } from './delete-identity-dialog/delete-identity-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    IdentitiesComponent,
    AddIdentityComponent,
    EditIdentityComponent,
    IdentityComponent,
    IdentityDetailComponent,
    DeleteIdentityDialogComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'identity', component: IdentityComponent}
    ]),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    Identity,
    IdentityService,
    IdentityResolver,
  ],
  entryComponents: [DeleteIdentityDialogComponent]
})
export class IdentityModule { }
