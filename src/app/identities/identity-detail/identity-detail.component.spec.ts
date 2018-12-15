import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDetailComponent } from './identity-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {ActivatedRoute, Data} from '@angular/router';
import * as moment from 'moment';

describe('IdentityDetailComponent', () => {
  let component: IdentityDetailComponent;
  let fixture: ComponentFixture<IdentityDetailComponent>;
  let activatedRoute;
  const ID = {
    id: 'MUZAn09876',
    identityRef: '6678944',
    name: 'Artemas',
    surname: 'Muzanenhamo',
    birthDate: moment.utc('28/03/1990', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0],
    villageOfOrigin: 'Mashayamombe',
    placeOfBirth: 'Zimbabwe',
    dateOfIssue: moment.utc('01/01/2018', 'DD/MM/YYYY', true).toDate().toISOString().split('T')[0]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                identity: ID,
              }),
            },
            // params: {
            //   subscribe: (fn: (value: Params) => void) => fn({
            //     tab: 0,
            //   }),
            // },
            snapshot: {
              url: [
                {
                  path: 'foo',
                },
                {
                  path: 'bar',
                },
                {
                  path: 'baz',
                },
              ],
            },
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(IdentityDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Back button with value Back', async() => {
    expect(component.backButton).toBe('Back');
  });
  it('should render Edit button with value Edit', async() => {
    expect(component.editButton).toBe('Edit');
  });
  it('should return identity data details', async() => {
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    // component.ngOnInit();
    expect(component.identity).toEqual(ID);
  });
});
