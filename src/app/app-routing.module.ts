import {NgModule} from '@angular/core';
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
import {LicenseDetailComponent} from './licenses/license-detail/license-detail.component';
import {LicenseResolver} from './licenses/license-resolver.service';
import {IdentityResolver} from './identities/identity-resolver.service';
import {IdentityDetailComponent} from './identities/identity-detail/identity-detail.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'licenses', component: LicenseComponent,
    children: [
      {path: '', component: LicensesComponent},
      {path: '0/edit', component: AddLicenseComponent},
      {
        path: ':id', component: LicenseDetailComponent,
        resolve: {license: LicenseResolver}
      },
      {
        path: ':id/edit', component: EditLicenseComponent,
        resolve: {license: LicenseResolver},
      }
    ]
  },
  {
    path: 'identities', component: IdentityComponent,
    children: [
      {path: '', component: IdentitiesComponent},
      {path: '0/edit', component: AddIdentityComponent},
      {
        path: ':id', component: IdentityDetailComponent,
        resolve: {license: IdentityResolver}
      },
      {
        path: ':id/edit', component: EditIdentityComponent,
        resolve: {identity: IdentityResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
