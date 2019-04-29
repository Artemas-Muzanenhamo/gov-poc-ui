import {async, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IdentityService} from '../identities.service';
import {DeleteIdentityDialogComponent} from './delete-identity-dialog.component';
import {of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogModule, MatDialogRef} from '@angular/material';

describe('DeleteIdentityComponent', () => {
  let fixture;
  let identityService;
  let component;
  let compiled;
  let identityServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        IdentityService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIdentityDialogComponent);
    identityService = TestBed.get(IdentityService);
    identityServiceStub = spyOn(identityService, 'deleteIdentity').and.returnValue(of(200));
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  // TODO: StaticInjectorError(DynamicTestModule)[MatDialogClose -> MatDialogRef]
  it('should display modal with YES button', async(() => {
  }));
});
