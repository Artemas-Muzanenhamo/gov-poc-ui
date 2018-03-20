import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from '../add-license/add-license.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from './licenses.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {EditLicenseComponent} from '../edit-license/edit-license.component';
import {IdentitiesComponent} from '../../identity/identities/identities.component';
import {AddIdentityComponent} from '../../identity/add-identity/add-identity.component';

describe('LicensesComponent', () => {

  let component: LicensesComponent;
  let fixture: ComponentFixture<LicensesComponent>;

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
        { provide: APP_BASE_HREF, useValue : '/'}
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should render a table to display license details', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#licenses-table').nodeName).toBe('TABLE');
  }));
  it('should render an ID field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#license-id').nodeName).toBe('TH');
  }));
  it('should render an ID REFERENCE field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#id-reference').nodeName).toBe('TH');
  }));
  it('should render a SURNAME field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#surname').nodeName).toBe('TH');
  }));
  it('should render a FIRSTNAME field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#first-name').nodeName).toBe('TH');
  }));
  it('should render a DATE OF BIRTH field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('TH');
  }));
  it('should render a COUNTRY field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#country').nodeName).toBe('TH');
  }));
  it('should render a DATE OF ISSUE field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#date-of-issue').nodeName).toBe('TH');
  }));
  it('should render an EXPIRY DATE field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#expiry-date').nodeName).toBe('TH');
  }));
  it('should render an AGENCY field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#agency').nodeName).toBe('TH');
  }));
  it('should render a LICENSE NUMBER field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#license-number').nodeName).toBe('TH');
  }));
  it('should render an ADDRESS field in the License Table Header', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#address').nodeName).toBe('TH');
  }));
  it('should render LICENSE ID in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#license-id-td').nodeName).toBe('TD');
  }));
  it('should render ID REFERENCE in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#id-ref-td').nodeName).toBe('TD');
  }));
  it('should render SURNAME in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#surname-td').nodeName).toBe('TD');
  }));
  it('should render FIRST NAMES in Table Data', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#first-names-td').nodeName).toBe('TD');
  }));
  it('should render DATE OF BIRTH in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#date-of-birth-td').nodeName).toBe('TD');
  }));
  it('should render COUNTRY in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#country-td').nodeName).toBe('TD');
  }));
  it('should render DATE OF ISSUE in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#date-of-issue-td').nodeName).toBe('TD');
  }));
  it('should render EXPIRY DATE in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#expiry-date-td').nodeName).toBe('TD');
  }));
  it('should render AGENCY in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#agency-td').nodeName).toBe('TD');
  }));
  it('should render LICENSE NUMBER in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#license-number-td').nodeName).toBe('TD');
  }));
  it('should render ADDRESS in Table Data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#address-td').nodeName).toBe('TD');
  }));
});
