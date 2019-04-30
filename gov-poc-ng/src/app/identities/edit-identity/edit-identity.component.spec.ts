import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdentityComponent } from './edit-identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {IdentityService} from '../identities.service';
import {of} from 'rxjs';

describe('EditIdentityComponent', () => {
  let component: EditIdentityComponent;
  let fixture: ComponentFixture<EditIdentityComponent>;
  let compiled;
  let identityService, identityServiceStub;
  const router = {
    navigate: jasmine.createSpy('navigate'),    // to spy on the url that has been routed
  };
  const IDENTITY = {
    id: 'MUZAn09876',
    identityRef: '6678944',
    name: 'Artemas',
    surname: 'Muzanenhamo',
    birthDate: '28/03/1990',
    villageOfOrigin: 'Mashayamombe',
    placeOfBirth: 'Zimbabwe',
    dateOfIssue: '28/03/1990'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      providers: [
        IdentityService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                identity: IDENTITY
              }
            },
          }
        },
        {provide: Router, useValue: router}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdentityComponent);
    identityService = TestBed.get(IdentityService);
    identityServiceStub = spyOn(identityService, 'updateIdentity').and.returnValue(of(200));
    component = fixture.componentInstance;
    component.ngOnInit();
    compiled = fixture.debugElement.nativeElement;
  });
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
  it('should submit a valid identity', async () => {
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/identities']);
  });
});
