import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from './license.component';
import {AddLicenseComponent} from './add-license/add-license.component';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {WelcomeComponent} from '../welcome/welcome.component';
import {IdentityComponent} from '../identity/identity.component';
import {LicensesComponent} from './licenses/licenses.component';
import {EditLicenseComponent} from './edit-license/edit-license.component';
import {IdentitiesComponent} from '../identity/identities/identities.component';

describe('LicenseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent,
        AddLicenseComponent,
        WelcomeComponent,
        IdentityComponent,
        LicensesComponent,
        EditLicenseComponent,
        IdentitiesComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/'}
      ]
    }).compileComponents();
  }));
  it('should render a navigation bar brand', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav#brand-navbar').textContent).toContain('BRAND');
  }));
  it('should render a navigation bar link Add License', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav#license-navbar').textContent).toContain('Add License');
  }));
  it('should render a navigation bar link Edit License', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav#license-navbar').textContent).toContain('Edit License');
  }));
});
