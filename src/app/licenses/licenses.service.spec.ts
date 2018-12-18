import {LicenseService} from './licenses.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import moment = require('moment');
import {License} from './license/license';

describe('LicenseServiceComponent', () => {
  let licenseService: LicenseService;
  let licenses: License[];
  let httpMock: HttpTestingController;
  const getLicensesURL = 'http://localhost:9999/license-service/licenses';

  beforeEach(() => {

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
      imports: [HttpClientTestingModule],
      providers: [LicenseService]
    });
    licenseService = TestBed.get(LicenseService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should add a valid license', async() => {
    const LICENSE: License = {
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
    };

    licenseService.addLicense(LICENSE)
      .subscribe();

    const req = httpMock.expectOne(getLicensesURL);
    expect(req.request.method).toEqual('POST');
    req.flush(LICENSE);
    httpMock.verify();
  });
  it('should update a valid license', async() => {
    const LICENSE: License = {
      id: '9054',
      identityRef: 'WOODS9054',
      surname: 'Woods',
      firstNames: 'Jason',
      dateOfBirth: moment.utc('14/10/1980', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      country: 'U.S.A',
      dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      expiryDate: moment.utc('01/01/2050', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      agency: 'DVLA',
      licenseNumber: 'WOODS2803901234',
      signatureImage: '01.PNG',
      address: '5 radstone court'
    };

    licenseService.updateLicense(LICENSE)
      .subscribe();

    const req = httpMock.expectOne(getLicensesURL);
    expect(req.request.method).toEqual('PUT');
    req.flush(LICENSE);
    httpMock.verify();
  });
  it('should return a list of licenses', async () => {
    licenseService.getLicenses()
      .subscribe(
        data => expect(data).toBe(licenses)
      );

    const req = httpMock.expectOne(getLicensesURL);
    expect(req.request.method).toEqual('GET');
    req.flush(licenses);
    httpMock.verify();
  });
  it('should return a single license', async () => {
    licenseService.getLicense(123)
      .subscribe(
        data => expect(data).toBe(licenses[0])
      );

    const req = httpMock.expectOne(getLicensesURL + '/ref');
    expect(req.request.method).toEqual('POST');
    req.flush(licenses[0]);
    httpMock.verify();
  });
});
