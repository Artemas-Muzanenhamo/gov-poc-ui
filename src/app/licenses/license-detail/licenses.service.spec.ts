import {LicenseService} from '../licenses.service';
import {async, TestBed} from '@angular/core/testing';

describe('LicenseServiceComponent', () => {
  let licenseService: LicenseService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LicenseService] });
    licenseService = TestBed.get(LicenseService);
  });
  it('should return 4 licenses in total', async( () => {
    expect(licenseService.getLicenses().length).toBe(4);
  }));
  it('should return a license given an ID', async( () => {
    expect(licenseService.getLicense(1234).firstNames).toBe('Artemas');
  }));
  fit('should not return a license given a non existent ID', async( () => {
    expect(licenseService.getLicense(1)).toBeFalsy();
  }));
});
