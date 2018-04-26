import {NgModule} from '@angular/core';
import {EditLicenseComponent} from './edit-license/edit-license.component';
import {LicensesComponent} from './license/license.component';
import {AddLicenseComponent} from './add-license/add-license.component';
import {LicenseComponent} from './licenses.component';
import {RouterModule} from '@angular/router';
import {LicenseService} from './licenses.service';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import {CommonModule} from '@angular/common';
import {LicenseResolver} from './license-detail/license-resolver.service';
import {License} from './license/license';
import {FormsModule} from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  providers: [
    License,
    LicenseService,
    LicenseResolver
  ]
})
export class LicenseModule {}
