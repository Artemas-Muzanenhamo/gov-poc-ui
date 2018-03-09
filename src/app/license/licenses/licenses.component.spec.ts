import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from '../add-license/add-license-component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from './licenses.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

describe('LicensesComponent', () => {
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
        { provide: APP_BASE_HREF, useValue : '/'}
      ]
    }).compileComponents();
  }));
  it('should render a table to display license details');
  it('should render an ID field in the License Table Header');
  it('should render an ID REFERENCE field in the License Table Header');
  it('should render a SURNAME field in the License Table Header');
  it('should render a FIRSTNAME field in the License Table Header');
  it('should render a DATE OF BIRTH field in the License Table Header');
  it('should render a COUNTRY field in the License Table Header');
  it('should render a DATE OF ISSUE field in the License Table Header');
  it('should render an EXPIRY DATE field in the License Table Header');
  it('should render an AGENCY field in the License Table Header');
  it('should render a LICENSE NUMBER field in the License Table Header');
  it('should render an ADDRESS field in the License Table Header');
});
