import { TestBed, async } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import {AppRoutingModule} from '../app-routing.module';
import {LicenseComponent} from '../license/license.component';
import {IdentityComponent} from '../identity/identity.component';
import {APP_BASE_HREF} from '@angular/common';
import {AddLicenseComponent} from '../license/add-license/add-license.component';
import {LicensesComponent} from '../license/licenses/licenses.component';
import {EditLicenseComponent} from '../license/edit-license/edit-license.component';
import {IdentitiesComponent} from '../identity/identities/identities.component';

describe('WelcomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        LicenseComponent,
        IdentityComponent,
        AddLicenseComponent,
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

  it('should render title GOV-POC in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1#headline').textContent).toContain('GOV-POC');
  }));
  it('should render a button SERVICES', async( () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#services-button').textContent).toContain('SERVICES');
  }));
  it('should render a button LICENSE SERVICE', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#license-service-button').textContent).toContain('LICENSE SERVICE');
  }));
  it('should render a button IDENTITY SERVICE', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#identity-service-button').textContent).toContain('IDENTITY SERVICE');
  }));
  it('should render modal with title SERVICES in an h1 tag', async( () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1#modal-services-button').textContent).toContain('SERVICES');
  }));
});
