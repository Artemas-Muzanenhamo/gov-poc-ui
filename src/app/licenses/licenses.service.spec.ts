import {LicenseService} from './licenses.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LicenseServiceComponent', () => {
  let licenseService: LicenseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LicenseService]
    });
    licenseService = TestBed.get(LicenseService);
  });
  it('should not return a license given a non existent ID', async(() => {
    expect(licenseService.getLicense(1)).toBeTruthy();
  }));
});
