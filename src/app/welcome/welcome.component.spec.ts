import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';

fdescribe('WelcomeComponent', () => {

  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render title GOV-POC in a h1 tag', async(() => {
    expect(compiled.querySelector('h1#headline').textContent).toContain('GOV-POC');
  }))
  it('should render a button SERVICES', async( () => {
    expect(compiled.querySelector('button#services-button').textContent).toContain('SERVICES');
  }));
  it('should render a button LICENSE SERVICE', async(() => {
    expect(compiled.querySelector('button#license-service-button').textContent).toContain('LICENSE SERVICE');
  }));
  it('should render a button IDENTITY SERVICE', async(() => {
    expect(compiled.querySelector('button#identity-service-button').textContent).toContain('IDENTITY SERVICE');
  }));
  it('should render modal with title SERVICES in an h1 tag', async( () => {
    expect(compiled.querySelector('h1#modal-services-button').textContent).toContain('SERVICES');
  }));
  it('should return GOV-POC as value for TITLE placeholder', async() => {
    expect(component.title).toBe('GOV-POC');
  });
  it('should return LICENSE SERVICE as value for LICENSESERVICE placeholder', async() => {
    expect(component.licenseService).toBe('LICENSE SERVICE');
  });
  it('should return SERVICES as value for SERVICES placeholder', async() => {
    expect(component.services).toBe('SERVICES');
  });
});
