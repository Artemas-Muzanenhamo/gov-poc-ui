import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from './add-license.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from '../licenses/licenses.component';
import {EditLicenseComponent} from '../edit-license/edit-license.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {IdentitiesComponent} from '../../identity/identities/identities.component';
import {AddIdentityComponent} from '../../identity/add-identity/add-identity.component';
import {EditIdentityComponent} from '../../identity/edit-identity/edit-identity.component';

describe('AddLicenseComponent', () => {

  let component: AddLicenseComponent;
  let fixture: ComponentFixture<AddLicenseComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent,
        EditLicenseComponent,
        AddLicenseComponent,
        IdentitiesComponent,
        AddIdentityComponent,
        EditIdentityComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render an Add License Form', async( () => {
    expect(compiled.querySelector('#add-license-form').nodeName).toBe('FORM');
  }));
  it('should render an ID field in the Add License Form', async( () => {
    expect(compiled.querySelector('#license-id-input').nodeName).toBe('INPUT');
  }));
  it('should render an ID REFERENCE in the Add License Form', async( () => {
    expect(compiled.querySelector('#id-ref-input').nodeName).toBe('INPUT');
  }));
  it('should render a SURNAME field in the Add License Form', async( () => {
    expect(compiled.querySelector('#surname-input').nodeName).toBe('INPUT');
  }));
  it('should render a FIRST NAME field in the Add License Form', async( () => {
    expect(compiled.querySelector('#first-name-input').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF BIRTH field in the Add License Form', async( () => {
    expect(compiled.querySelector('#dob-input').nodeName).toBe('INPUT');
  }));
  it('should render a COUNTRY field in the Add License Form', async( () => {
    expect(compiled.querySelector('#country-input').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF ISSUE field in the Add License Form', async( () => {
    expect(compiled.querySelector('#date-of-issue-input').nodeName).toBe('INPUT');
  }));
  it('should render an EXPIRY DATE field in the Add License Form', async( () => {
    expect(compiled.querySelector('#expiry-date-input').nodeName).toBe('INPUT');
  }));
  it('should render an AGENCY field in the Add License Form', async( () => {
    expect(compiled.querySelector('#agency-input').nodeName).toBe('INPUT');
  }));
  it('should render an ADDRESS field in the Add License Form', async( () => {
    expect(compiled.querySelector('#address-input').nodeName).toBe('INPUT');
  }));
  it('should render a SUBMIT button', async( () => {
    expect(compiled.querySelector('button#submit-license').textContent).toContain('Submit');
  }));
  it('should render a VIEW LICENSES button', async( () => {
    expect(compiled.querySelector('button#view-licenses').textContent).toContain('View Licenses');
  }));
});
