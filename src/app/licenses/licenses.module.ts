import {NgModule} from '@angular/core';
import {EditLicenseComponent} from './edit-license/edit-license.component';
import {LicensesComponent} from './license/license.component';
import {AddLicenseComponent} from './add-license/add-license.component';
import {LicenseComponent} from './licenses.component';
import {RouterModule} from '@angular/router';
import {LicenseService} from './licenses.service';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LicenseComponent,
    AddLicenseComponent,
    LicensesComponent,
    EditLicenseComponent,
    LicenseDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'license', component: LicenseComponent}
    ]),
    CommonModule
  ],
  providers: [LicenseService]
})
export class LicenseModule {}
