import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddLicenseComponent} from './add-license.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import moment = require('moment');
import {LicenseService} from '../licenses.service';
import {of} from 'rxjs';

describe('AddLicenseComponent', () => {

  let component: AddLicenseComponent;
  let fixture: ComponentFixture<AddLicenseComponent>;
  let compiled;
  let licenseService: LicenseService;
  let licenseServiceStub;
  const LICENSE = {
    id: '1234',
    identityRef: 'MUZAN1234',
    surname: 'Muzanenhamo',
    firstNames: 'Artemas',
    dateOfBirth: moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    country: 'Zimbabwe',
    dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    agency: 'DVLA',
    licenseNumber: 'MUZAN2803901234',
    signatureImage: '01.PNG',
    address: '5 radstone court'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      providers: [
        LicenseService
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseComponent);
    licenseService = TestBed.get(LicenseService);
    licenseServiceStub = spyOn(licenseService, 'addLicense').and.returnValue(of(200));
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
  it('should render a BACK button', async( () => {
    expect(compiled.querySelector('button#view-licenses').textContent).toContain('Back');
  }));
  it('should add a valid license', async()  => {
    component.license = LICENSE;
    component.onSubmit();
    expect(component.license.expiryDate).toBeTruthy();
  });
});
