import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LicenseComponent} from './license/license.component';
import {IdentityComponent} from './identity/identity.component';

const routes: Routes = [
  { path: 'licenses', component: LicenseComponent },
  { path: 'identities', component: IdentityComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
