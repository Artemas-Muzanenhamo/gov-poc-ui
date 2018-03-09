import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from '../add-license/add-license-component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from '../licenses/licenses.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

describe('EditLicenseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        AddLicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should render an Edit License Form');
});
