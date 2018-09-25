import {LicenseService} from './licenses.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LicenseServiceComponent', () => {
  let licenseService: LicenseService;
  let licenseServiceSpy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LicenseService]
    });
    licenseService = TestBed.get(LicenseService);
    licenseServiceSpy = spyOn(licenseService, 'getLicenses').and.callThrough();
  });
  it('should not return a license given a non existent ID', async(() => {
    expect(licenseService.getLicense(1)).toBeTruthy();
  }));
  it('should return 500 error when called and server is down',  async( () => {
    licenseService.getLicense(1);
    expect(licenseServiceSpy).toHaveBeenCalledTimes(1);
  }));
});
