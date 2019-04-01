import {async, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IdentityService} from '../identities.service';
import {DeleteIdentityDialogComponent} from './delete-identity-dialog.component';

describe('DeleteIdentityComponent', () => {
  let fixture;
  let identityService;
  let component;
  let compiled;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIdentityDialogComponent);
    identityService = TestBed.get(IdentityService);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should display modal with YES button', async(() => {
  }));
});
