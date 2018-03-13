import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from './add-license.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from '../licenses/licenses.component';
import {EditLicenseComponent} from '../edit-license/edit-license.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

describe('AddLicenseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent,
        EditLicenseComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should render an Add License Form');
  it('should render an ID field in the Add License Form');
  it('should render an ID field in the Add License Form');
  it('should render an ID REFERENCE field in the Add License Form');
  it('should render a SURNAME field in the Add License Form');
  it('should render a FIRST NAME field in the Add License Form');
  it('should render a DATE OF BIRTH field in the Add License Form');
  it('should render a COUNTRY field in the Add License Form');
  it('should render a DATE OF ISSUE field in the Add License Form');
  it('should render an EXPIRY DATE field in the Add License Form');
  it('should render an AGENCY field in the Add License Form');
  it('should render a LICENSE NUMBER field in the Add License Form');
  it('should render an ADDRESS field in the Add License Form');
});
