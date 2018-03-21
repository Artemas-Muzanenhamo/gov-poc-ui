import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IdentitiesComponent} from './identities.component';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {LicenseComponent} from '../../license/license.component';
import {LicensesComponent} from '../../license/licenses/licenses.component';
import {AddLicenseComponent} from '../../license/add-license/add-license.component';
import {EditLicenseComponent} from '../../license/edit-license/edit-license.component';
import {AddIdentityComponent} from '../add-identity/add-identity.component';
import {IdentityComponent} from '../identity.component';
import {EditIdentityComponent} from '../edit-identity/edit-identity.component';
import {AppRoutingModule} from '../../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

fdescribe('IdentitiesComponent', () => {

  let component: IdentitiesComponent;
  let fixture: ComponentFixture<IdentitiesComponent>;
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
        EditIdentityComponent,
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
    fixture = TestBed.createComponent(IdentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a table of Identities', async( () => {
    expect(compiled.querySelector('#identities-table').nodeName).toContain('TABLE');
  }));
});
