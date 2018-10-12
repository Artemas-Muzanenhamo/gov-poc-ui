import {IdentityService} from './identities.service';
import {async, TestBed} from '@angular/core/testing';
import * as moment from 'moment';
import {Identity} from './identity/identity';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('IdentityServiceComponent', () => {
  let identityService: IdentityService;
  let identities: Identity[];
  let getIdentitiesSpy;
  let getIdentitySpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        IdentityService
      ] });
    identityService = TestBed.get(IdentityService);
    getIdentitiesSpy = spyOn(identityService, 'getIdentities').and.returnValue(of(identities));
    getIdentitySpy = spyOn(identityService, 'getIdentity').and.returnValue(of(identities[0]));
  });

  identities = [
    {
      id: 'MUZAn09876',
      identityRef: '6678944',
      name: 'Artemas',
      surname: 'Muzanenhamo',
      birthDate: moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
    },
    {
      id: 'TAKUn09876',
      identityRef: '9478966',
      name: 'Takudzwa',
      surname: 'Matse',
      birthDate: moment.utc('19/01/1980', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: moment.utc('18/05/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
    },
    {
      id: 'THOMn09876',
      identityRef: '9978933',
      name: 'Thomas',
      surname: 'Smith',
      birthDate: moment.utc('05/05/1989', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: moment.utc('20/03/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
    },
    {
      id: 'GIANn09876',
      identityRef: '1178900',
      name: 'Giannis',
      surname: 'Marks',
      birthDate: moment.utc('12/06/2000', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
      villageOfOrigin: 'Mashayamombe',
      placeOfBirth: 'Zimbabwe',
      dateOfIssue: moment.utc('06/04/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
    }
  ];


  it('should return 4 identities in total', async( () => {
    // expect(identityService.getIdentities()).toBe(4);
    expect(identityService.getIdentities()
      .subscribe(
        identity => expect(identity).toBe(identities)
      ));
  }));
  fit('should return a single License', async ( () => {
    identityService.getIdentity(1)
      .subscribe(id => expect(id.name).toBe('Artemas'));
  }));
});
