import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LicenseComponent} from './licenses/licenses.component';
import {IdentityComponent} from './identities/identities.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddLicenseComponent} from './licenses/add-license/add-license.component';
import {LicensesComponent} from './licenses/license/license.component';
import {EditLicenseComponent} from './licenses/edit-license/edit-license.component';
import {IdentitiesComponent} from './identities/identity/identity.component';
import {AddIdentityComponent} from './identities/add-identity/add-identity.component';
import {EditIdentityComponent} from './identities/edit-identity/edit-identity.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'licenses', component: LicenseComponent,
    children: [
      { path: '', component: LicensesComponent},
      { path: 'add-license', component: AddLicenseComponent},
      { path: 'edit-license', component: EditLicenseComponent}
      ]
  },
  { path: 'identities', component: IdentityComponent,
    children: [
      { path: '', component: IdentitiesComponent},
      { path: 'add-identity', component: AddIdentityComponent},
      { path: 'edit-identity', component: EditIdentityComponent}
    ]}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
