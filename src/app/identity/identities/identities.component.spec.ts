import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {IdentityComponent} from '../identity.component';
import {IdentitiesComponent} from './identities.component';
import {LicenseComponent} from '../../license/license.component';
import {LicensesComponent} from '../../license/licenses/licenses.component';
import {AddLicenseComponent} from '../../license/add-license/add-license.component';
import {EditLicenseComponent} from '../../license/edit-license/edit-license.component';

describe('IdentitiesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        IdentityComponent,
        LicenseComponent,
        LicensesComponent,
        AddLicenseComponent,
        EditLicenseComponent,
        IdentitiesComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should render the brand logo on the nav bar', async( () => {
    const fixture = TestBed.createComponent(IdentitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#brand').nodeName).toContain('LI');
  }));
  it('should render a table of Identites');
  it('should render a nav bar', async( () => {
    const fixture = TestBed.createComponent(IdentitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#identities-nav').nodeName).toContain('NAV');
  }));
  it('should render a list Add Identity on the nav bar', async( () => {
    const fixture = TestBed.createComponent(IdentitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#add-identity').nodeName).toContain('LI');
  }));
  it('should render a list Edit Identity on the nav bar', async( () => {
    const fixture = TestBed.createComponent(IdentitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#edit-identity').nodeName).toContain('LI');
  }));
});
