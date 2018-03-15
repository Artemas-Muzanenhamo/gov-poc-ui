import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from '../license.component';
import {AddLicenseComponent} from '../add-license/add-license.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../../identity/identity.component';
import {LicensesComponent} from '../licenses/licenses.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {EditLicenseComponent} from './edit-license.component';

describe('EditLicenseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        AddLicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent,
        EditLicenseComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should render an Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-license-form').nodeName).toBe('FORM');
  }));
  it('should render an ID field in the Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-license-id').nodeName).toBe('INPUT');
  }));
  it('should render an ID REFERENCE field in the Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-id-reference').nodeName).toBe('INPUT');
  }));
  it('should render a SURNAME field in the Edit License Form', () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-surname').nodeName).toBe('INPUT');
  });
  it('should render a FIRST NAME field in the Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-first-name').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF BIRTH field in the Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('INPUT');
  }));
  it('should render a COUNTRY field in the Edit License Form', async( () => {
    const fixture = TestBed.createComponent(EditLicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#country').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF ISSUE field in the Edit License Form');
  it('should render an EXPIRY DATE field in the Edit License Form');
  it('should render an AGENCY field in the Edit License Form');
  it('should render a LICENSE NUMBER field in the Edit License Form');
  it('should render an ADDRESS field in the Edit License Form');
});
