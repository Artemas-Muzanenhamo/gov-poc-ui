import {IdentityService} from './identities.service';
import {async, TestBed} from '@angular/core/testing';

describe('IdentityServiceComponent', () => {
  let identityService: IdentityService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [IdentityService] });
    identityService = TestBed.get(IdentityService);
  });
  // it('should return 4 identities in total', async( () => {
  //   expect(identityService.getIdentities().length).toBe(4);
  // }));
  // it('should return an identity given an ID number', async( () => {
  //   expect(identityService.getIdentity(6678944).name).toBe('Artemas');
  // }));
  // it('should not return an identity given a non existent ID number', async( () => {
  //   expect(identityService.getIdentity(1)).toBeFalsy();
  // }));
});
