import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {WelcomeComponent} from '../welcome/welcome.component';
import {LicenseComponent} from '../license/license.component';
import {LicensesComponent} from '../license/licenses/licenses.component';
import {AddLicenseComponent} from '../license/add-license/add-license.component';
import {EditLicenseComponent} from '../license/edit-license/edit-license.component';
import {IdentityComponent} from './identity.component';
import {AddIdentityComponent} from './add-identity/add-identity.component';
import {AppRoutingModule} from '../app-routing.module';
import {IdentitiesComponent} from './identities/identities.component';


describe('IdentityComponent', () => {

  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        LicenseComponent,
        LicensesComponent,
        AddLicenseComponent,
        EditLicenseComponent,
        AddIdentityComponent,
        IdentityComponent,
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
  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render the brand logo on the nav bar', async( () => {
    expect(compiled.querySelector('#brand').nodeName).toContain('LI');
  }));
  it('should render a table of Identites');
  it('should render a nav bar', async( () => {
    expect(compiled.querySelector('#identities-nav').nodeName).toContain('NAV');
  }));
  it('should render a list Add Identity on the nav bar', async( () => {
    expect(compiled.querySelector('#add-identity').nodeName).toContain('LI');
  }));
  it('should render a list Edit Identity on the nav bar', async( () => {
    expect(compiled.querySelector('#edit-identity').nodeName).toContain('LI');
  }));
});
