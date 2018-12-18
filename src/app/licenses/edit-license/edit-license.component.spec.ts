import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditLicenseComponent} from './edit-license.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {ActivatedRoute, Data} from '@angular/router';
import {LicenseService} from '../licenses.service';
import * as moment from 'moment';

describe('EditLicenseComponent', () => {

  let component: EditLicenseComponent;
  let fixture: ComponentFixture<EditLicenseComponent>;
  let compiled;
  let activatedRoute: ActivatedRoute;
  const LICENSE = {
    id: '1234',
    identityRef: 'MUZAN1234',
    surname: 'Muzanenhamo',
    firstNames: 'Artemas',
    dateOfBirth: '28/03/1990',
    country: 'Zimbabwe',
    dateOfIssue: '28/03/1990',
    expiryDate: '28/03/1990',
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
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                license: LICENSE
              }
            }
          }
        },
        LicenseService
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(EditLicenseComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    compiled = fixture.debugElement.nativeElement;
    await fixture.whenStable();
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
  it('should return a pageTitle value of Edit License Details', async( () => {
    expect(component.pageTitle).toBe('Edit License Details');
  }));
  it('should return a submitButton value of Submit', async( () => {
    expect(component.submitButton).toBe('Submit');
  }));
  it('should return a backButton value of Back', async( () => {
    expect(component.backButton).toBe('Back');
  }));
  it('should return identity data details', async() => {
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    component.license.dateOfBirth = moment
      .utc(component.license.dateOfBirth, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    component.license.dateOfIssue = moment
      .utc(component.license.dateOfIssue, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];

    component.license.expiryDate = moment
      .utc(component.license.expiryDate, 'YYYY-MM-DD', true)
      .toDate()
      .toLocaleDateString()
      .split('T')[0];
    expect(component.license).toBeTruthy();
  });
});
