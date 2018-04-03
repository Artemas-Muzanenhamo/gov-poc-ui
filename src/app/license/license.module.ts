import {NgModule} from '@angular/core';
import {EditLicenseComponent} from './edit-license/edit-license.component';
import {LicensesComponent} from './licenses/licenses.component';
import {AddLicenseComponent} from './add-license/add-license.component';
import {LicenseComponent} from './license.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LicenseComponent,
    AddLicenseComponent,
    LicensesComponent,
    EditLicenseComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'license', component: LicenseComponent}
    ])
  ],
  providers: []
})
export class LicenseModule {}
