import {async, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IdentityService} from '../identities.service';

describe('DeleteIdentityComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        IdentityService
      ]
    }).compileComponents();
  }));
});
