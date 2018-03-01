import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LicenseComponent} from './license/license.component';
import {IdentityComponent} from './identity/identity.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddLicenseComponent} from './license/add-license/add-license-component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'licenses',
    component: LicenseComponent,
    children: [
      { path: 'add-license', component: AddLicenseComponent}
      ]
  },
  { path: 'identities', component: IdentityComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
