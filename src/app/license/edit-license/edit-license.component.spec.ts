import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from '../add-license/add-license.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from '../licenses/licenses.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {EditLicenseComponent} from './edit-license.component';
import {IdentitiesComponent} from '../../identity/identities/identities.component';
import {AddIdentityComponent} from '../../identity/add-identity/add-identity.component';

describe('EditLicenseComponent', () => {

  let component: EditLicenseComponent;
  let fixture: ComponentFixture<EditLicenseComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        AddLicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent,
        EditLicenseComponent,
        IdentitiesComponent,
        AddIdentityComponent
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
    fixture = TestBed.createComponent(EditLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render an Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-license-form').nodeName).toBe('FORM');
  }));
  it('should render an ID field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-license-id').nodeName).toBe('INPUT');
  }));
  it('should render an ID REFERENCE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-id-reference').nodeName).toBe('INPUT');
  }));
  it('should render a SURNAME field in the Edit License Form', () => {
    expect(compiled.querySelector('#edit-surname').nodeName).toBe('INPUT');
  });
  it('should render a FIRST NAME field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-first-name').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF BIRTH field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('INPUT');
  }));
  it('should render a COUNTRY field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#country').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF ISSUE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#date-of-issue').nodeName).toBe('INPUT');
  }));
  it('should render an EXPIRY DATE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#expiry-date').nodeName).toBe('INPUT');
  }));
  it('should render an AGENCY field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#agency').nodeName).toBe('INPUT');
  }));
  it('should render an ADDRESS field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#address').nodeName).toBe('INPUT');
  }));
  it('should render a SUBMIT button', async( () => {
    expect(compiled.querySelector('#submit-edit-license').nodeName).toBe('BUTTON');
  }));
  it('should render a VIEW LICENSES button', async( () => {
    expect(compiled.querySelector('#view-licenses').nodeName).toBe('BUTTON');
  }));
});
