import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentityComponent } from './add-identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {IdentityService} from '../identities.service';
import * as moment from 'moment';
import {Identity} from '../identity/identity';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddIdentityComponent', () => {
  let component: AddIdentityComponent;
  let fixture: ComponentFixture<AddIdentityComponent>;
  let compiled;
  let identityService;
  let getIdentitiesStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    identityService = TestBed.get(IdentityService);
    getIdentitiesStub = spyOn(identityService, 'addIdentity').and.returnValue(200);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdentityComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  const identity: Identity = {
    id: 'GIANn09876',
      identityRef: '1178900',
    name: 'Giannis',
    surname: 'Marks',
    birthDate: moment.utc('12/06/2000', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    villageOfOrigin: 'Mashayamombe',
    placeOfBirth: 'Zimbabwe',
    dateOfIssue: moment.utc('06/04/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  };

  it('should render Add Identity form', async( () => {
    expect(compiled.querySelector('#identity-form').nodeName).toContain('FORM');
  }));
  it('should render ID Number as input', async( () => {
    expect(compiled.querySelector('#identity-number').nodeName).toContain('INPUT');
  }));
  it('should render ID Reference as input', async( () => {
    expect(compiled.querySelector('#identity-ref').nodeName).toContain('INPUT');
  }));
  it('should render First Names as input', async( () => {
    expect(compiled.querySelector('#first-names').nodeName).toContain('INPUT');
  }));
  it('should render Surname as input', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toContain('INPUT');
  }));
  it('should render Date of Birth as input', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toContain('INPUT');
  }));
  it('should render Village of Origin as input', async( () => {
    expect(compiled.querySelector('#village-of-origin').nodeName).toContain('INPUT');
  }));
  it('should render Place of Birth as input', async( () => {
    expect(compiled.querySelector('#place-of-birth').nodeName).toContain('INPUT');
  }));
  it('should render Date of Issue as input', async( () => {
    expect(compiled.querySelector('#date-of-issue').nodeName).toContain('INPUT');
  }));
  it('should render a SUBMIT button', async( () => {
    expect(compiled.querySelector('#submit-identity').nodeName).toContain('BUTTON');
  }));
  it('should render a VIEW IDENTITIES button', async( () => {
    expect(compiled.querySelector('#view-identities').nodeName).toContain('BUTTON');
  }));
  // TODO - Needs to use RouterTestingModule in order to work
  // TODO - Set up Router to work first
  // TODO - Navigate to Add Identity location
  // TODO - Then perform and assert
  xit('should return a response 200 when adding an identity', () => {
    identityService.addIdentity(identity)
      .subscribe(
        response => expect(response).toBe(200)
      );
  });
});
