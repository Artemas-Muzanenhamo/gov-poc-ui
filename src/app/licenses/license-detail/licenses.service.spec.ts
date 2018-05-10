import {LicenseService} from '../licenses.service';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

fdescribe('LicenseServiceComponent', () => {
  let licenses: LicenseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule]
    })
      .compileComponents();
  }));
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
