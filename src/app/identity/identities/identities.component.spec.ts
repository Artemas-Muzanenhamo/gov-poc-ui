import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../identity.component';

describe('IdentitiesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        IdentityComponent,
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should render a table of Identites');
});
