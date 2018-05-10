import {LicenseService} from '../licenses.service';
import {async, TestBed} from '@angular/core/testing';

describe('LicenseServiceComponent', () => {
  let licenses: LicenseService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LicenseService] });
    licenses = TestBed.get(LicenseService);
  });
  it('should return 4 licenses in total', async( () => {
    expect(licenses.getLicenses().length).toBe(4);
  }));
  it('should return a license given an ID', async( () => {
    expect(licenses.getLicense(1234).firstNames).toBe('Artemas');
  }));
});
