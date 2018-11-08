import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IdentityComponent} from './identities.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {IdentityService} from './identities.service';


describe('IdentityComponent', () => {

  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;
  let compiled;
  let identityService;
  let getIdentitiesStub;
  let getIdentityStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    identityService = TestBed.get(IdentityService);
    getIdentitiesStub = spyOn(identityService, 'getIdentities').and.callThrough();
    getIdentityStub = spyOn(identityService, 'getIdentity').and.callThrough();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render the brand logo on the nav bar', async( () => {
    expect(compiled.querySelector('#brand').nodeName).toContain('LI');
  }));
  it('should render a nav bar', async( () => {
    expect(compiled.querySelector('#identities-nav').nodeName).toContain('NAV');
  }));
  it('should render a list Add Identity on the nav bar', async( () => {
    expect(compiled.querySelector('#add-identity').nodeName).toContain('LI');
  }));
});
