import {NgModule} from '@angular/core';
import {EditIdentityComponent} from './edit-identity/edit-identity.component';
import {AddIdentityComponent} from './add-identity/add-identity.component';
import {IdentitiesComponent} from './identities/identities.component';
import {IdentityComponent} from './identity.component';
import {RouterModule} from '@angular/router';

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
    ])
  ]
})
export class IdentityModule { }
