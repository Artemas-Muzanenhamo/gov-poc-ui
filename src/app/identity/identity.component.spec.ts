import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IdentityComponent} from './identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';


describe('IdentityComponent', () => {

  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
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
