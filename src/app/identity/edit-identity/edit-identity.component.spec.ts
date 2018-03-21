import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdentityComponent } from './edit-identity.component';
import {AddIdentityComponent} from '../add-identity/add-identity.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {LicenseComponent} from '../../license/license.component';
import {LicensesComponent} from '../../license/licenses/licenses.component';
import {AddLicenseComponent} from '../../license/add-license/add-license.component';
import {EditLicenseComponent} from '../../license/edit-license/edit-license.component';
import {IdentitiesComponent} from '../identities/identities.component';
import {IdentityComponent} from '../identity.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

describe('EditIdentityComponent', () => {
  let component: EditIdentityComponent;
  let fixture: ComponentFixture<EditIdentityComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditIdentityComponent,
        AddIdentityComponent,
        WelcomeComponent,
        AddIdentityComponent,
        LicenseComponent,
        LicensesComponent,
        AddLicenseComponent,
        EditLicenseComponent,
        IdentitiesComponent,
        IdentityComponent

      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Add Identity form', async( () => {
    expect(compiled.querySelector('#identity-form').nodeName).toContain('FORM');
  }));
  // it('should render ID Number as input', async( () => {
  //   expect(compiled.querySelector('#identity-number').nodeName).toContain('INPUT');SHOULD DISPLAY THE IDENTITY NUMBER
  // }));
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
});
