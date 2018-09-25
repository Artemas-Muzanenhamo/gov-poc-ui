import {LicenseService} from './licenses.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {License} from './license/license';
import moment = require('moment');

describe('LicenseServiceComponent', () => {
  let licenseService: LicenseService;
  let getLicenseSpy;
  let getLicensesSpy;
  let license;

  beforeEach(() => {

    license = [
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
    getLicenseSpy = spyOn(licenseService, 'getLicense').and.returnValue(license[0]);
    getLicensesSpy = spyOn(licenseService, 'getLicenses').and.returnValue(license);
  });
  it('should return a spy on the service method getLicense(id)',  async( () => {
    licenseService.getLicense(1);
    expect(getLicenseSpy).toHaveBeenCalledTimes(1);
  }));
  it('should return the first license when getLicense(1) method is called', async( () => {
    expect(licenseService.getLicense(1).firstNames).toBe('Artemas');
  }));
  it('should return a spy on the service method getLicenses()', async( () => {
    licenseService.getLicenses();
    expect(getLicensesSpy).toHaveBeenCalledTimes(1);
  }));
  it('should return 4 licenses when the getLicenses() method is called', async( () => {
    expect(licenseService.getLicenses().length).toBe(4);
  }));
});
