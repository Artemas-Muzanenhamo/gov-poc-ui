import { TestBed, async } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent
      ],
    }).compileComponents();
  }));

  it('should render title GOV-POC in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1#headline').textContent).toContain('GOV-POC');
  }));
  it('should render Services button', async( () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#services').textContent).toContain('Services');
  }));
  it('should render a button License Service', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#license-service-button').textContent).toContain('License Service');
  }));
  it('should render a button Identity Service', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#identity-service-button').textContent).toContain('Identity Service');
  }));
});
