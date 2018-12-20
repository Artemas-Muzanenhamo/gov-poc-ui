import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicensesComponent} from './license.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {LicenseService} from '../licenses.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import moment = require('moment');
import {of} from 'rxjs';

describe('LicensesComponent', () => {

  let component: LicensesComponent;
  let fixture: ComponentFixture<LicensesComponent>;
  let compiled;
  let licenseService;
  let getLicenseSpy;
  let licenses;

  beforeEach(async(() => {

    licenses = [
      {
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
      },
      {
        id: '7744',
        identityRef: 'SMITH7744',
        surname: 'Smith',
        firstNames: 'John',
        dateOfBirth: moment.utc('17/04/1989', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        country: 'United Kingdom',
        dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        agency: 'DVLA',
        licenseNumber: 'SMITH2803901234',
        signatureImage: '01.PNG',
        address: '5 radstone court'
      },
      {
        id: '2334',
        identityRef: 'TERREL2334',
        surname: 'Terrel',
        firstNames: 'Michael',
        dateOfBirth: moment.utc('01/02/1958', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        country: 'Ghana',
        dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        agency: 'DVLA',
        licenseNumber: 'TERR2803901234',
        signatureImage: '01.PNG',
        address: '5 radstone court'
      },
      {
        id: '9054',
        identityRef: 'WOODS9054',
        surname: 'Woods',
        firstNames: 'Tiger',
        dateOfBirth: moment.utc('14/10/1980', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        country: 'U.S.A',
        dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
        agency: 'DVLA',
        licenseNumber: 'WOODS2803901234',
        signatureImage: '01.PNG',
        address: '5 radstone court'
      }
    ];

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    licenseService = TestBed.get(LicenseService);
    getLicenseSpy = spyOn(licenseService, 'getLicenses').and.returnValue(of(licenses));

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a table to display license details', async( () => {
    expect(compiled.querySelector('#licenses-table').nodeName).toBe('TABLE');
  }));
  it('should render an ID field in the License Table Header', async( () => {
    expect(compiled.querySelector('#license-id').nodeName).toBe('TH');
  }));
  it('should render a SURNAME field in the License Table Header', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toBe('TH');
  }));
  it('should render a FIRSTNAME field in the License Table Header', async( () => {
    expect(compiled.querySelector('#first-name').nodeName).toBe('TH');
  }));
  it('should render a DATE OF BIRTH field in the License Table Header', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('TH');
  }));
  it('should render a COUNTRY field in the License Table Header', async( () => {
    expect(compiled.querySelector('#country').nodeName).toBe('TH');
  }));
  it('should render LICENSE FirstNames in Table Data', async(() => {
    licenseService.getLicenses()
      .subscribe(results => expect(results[0].firstNames).toBe('Artemas'));
  }));
  it('should render SURNAME in Table Data', async(() => {
    licenseService.getLicenses()
      .subscribe(results => expect(results[0].surname).toBe('Muzanenhamo'));
  }));
  it('should render DATE OF BIRTH in Table Data', async(() => {
    licenseService.getLicenses()
      .subscribe(results => expect(results[0].dateOfBirth)
        .toBe(moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]));
  }));
  it('should render COUNTRY in Table Data', async(() => {
    licenseService.getLicenses()
      .subscribe(results => expect(results[0].country).toBe('Zimbabwe'));
  }));
  it('should return the total number of Licenses', async( () => {
    component.ngOnInit();
    licenseService.getLicenses()
      .subscribe(
        results => expect(results.length).toBe(4)
      );
  }));
});
