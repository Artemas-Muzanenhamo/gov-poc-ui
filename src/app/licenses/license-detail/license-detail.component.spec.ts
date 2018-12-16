import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDetailComponent } from './license-detail.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Data} from '@angular/router';
import moment = require('moment');

describe('LicenseDetailComponent', () => {
  let component: LicenseDetailComponent;
  let fixture: ComponentFixture<LicenseDetailComponent>;
  let activatedRoute;
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
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                license: LICENSE,
              }),
            },
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(LicenseDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    await fixture.whenStable();
  });

  it('should return BACK from variable backButton', async() => {
    expect(component.backButton).toBe('Back');
  });
  it('should return EDIT from variable editButton', async() => {
    expect(component.editButton).toBe('Edit');
  });
  it('should return license data details', async() => {
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    expect(component.license).toEqual(LICENSE);
  });
});
