import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicenseComponent} from './licenses.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';

describe('LicenseComponent', () => {

  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a navigation bar brand', async( () => {
    expect(compiled.querySelector('nav#brand-navbar').nodeName).toContain('NAV');
  }));
  it('should render a navigation bar link Add License', async( () => {
    expect(compiled.querySelector('nav#license-navbar').textContent).toContain('Add License');
  }));
});
