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

@NgModule({
  declarations: [
    IdentitiesComponent,
    AddIdentityComponent,
    EditIdentityComponent,
    IdentityComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'identity', component: IdentityComponent}
    ]),
    CommonModule
  ],
  providers: [
    Identity,
    IdentityService,
    IdentityResolver
  ]
})
export class IdentityModule { }
