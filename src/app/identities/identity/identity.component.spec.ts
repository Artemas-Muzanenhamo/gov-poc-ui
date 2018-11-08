import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IdentitiesComponent} from './identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import * as moment from 'moment';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IdentityService} from '../identities.service';
import {of} from 'rxjs';

describe('IdentitiesComponent', () => {

  let component: IdentitiesComponent;
  let fixture: ComponentFixture<IdentitiesComponent>;
  let compiled;
  let identities;
  let identityService;
  let identityStub;

  beforeEach(async(() => {

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

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    identityService = TestBed.get(IdentityService);
    identityStub = spyOn(identityService, 'getIdentity').and.returnValue(of(identities[0]));
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(IdentitiesComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a table of Identities', async( () => {
    expect(compiled.querySelector('#identities-table').nodeName).toContain('TABLE');
  }));
  it('should render IDENTITY in the table header', async( () => {
    expect(compiled.querySelector('#identity-id').nodeName).toBe('TH');
  }));
  it('should render IDENTITY REF in the table header', async( () => {
    expect(compiled.querySelector('#identity-ref').nodeName).toBe('TH');
  }));
  it('should render NAME in the table header', async( () => {
    expect(compiled.querySelector('#first-name').nodeName).toBe('TH');
  }));
  it('should render SURNAME in the table header', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toBe('TH');
  }));
  it('should render DATE OF BIRTH in the table header', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('TH');
  }));
  // it('should render IDENTITY in the table data', async( () => {
  //   identityService.getIdentity(1);
  //   expect(compiled.querySelector('#identity-id-td').nodeName).toBe('TD');
  // }));
  it('should render IDENTITY REF in the table data', async( () => {
    identityService.getIdentity(1)
      .subscribe(
        id => expect(id.identityRef).toBe('6678944')
      );
  }));
  it('should render NAME in the table data', async( () => {
    identityService.getIdentity(1)
      .subscribe(
        id => expect(id.name).toBe('Artemas')
      );
  }));
  it('should render SURNAME in the table data', async( () => {
    identityService.getIdentity(1)
      .subscribe(
        id => expect(id.surname).toBe('Muzanenhamo')
      );
  }));
  it('should render DATE OF BIRTH in the table data', async( () => {
    identityService.getIdentity(1)
      .subscribe(
        id => {
          expect(id.birthDate).toBe('1990-03-28');
        }
      );
  }));
});
