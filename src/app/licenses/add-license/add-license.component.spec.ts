import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddLicenseComponent} from './add-license.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

describe('AddLicenseComponent', () => {

  let component: AddLicenseComponent;
  let fixture: ComponentFixture<AddLicenseComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render an Add License Form', async( () => {
    expect(compiled.querySelector('#add-license-form').nodeName).toBe('FORM');
  }));
  it('should render an ID field in the Add License Form', async( () => {
    expect(compiled.querySelector('#license-id-input').nodeName).toBe('INPUT');
  }));
  it('should render an ID REFERENCE in the Add License Form', async( () => {
    expect(compiled.querySelector('#id-ref-input').nodeName).toBe('INPUT');
  }));
  it('should render a SURNAME field in the Add License Form', async( () => {
    expect(compiled.querySelector('#surname-input').nodeName).toBe('INPUT');
  }));
  it('should render a FIRST NAME field in the Add License Form', async( () => {
    expect(compiled.querySelector('#first-name-input').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF BIRTH field in the Add License Form', async( () => {
    expect(compiled.querySelector('#dob-input').nodeName).toBe('INPUT');
  }));
  it('should render a COUNTRY field in the Add License Form', async( () => {
    expect(compiled.querySelector('#country-input').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF ISSUE field in the Add License Form', async( () => {
    expect(compiled.querySelector('#date-of-issue-input').nodeName).toBe('INPUT');
  }));
  it('should render an EXPIRY DATE field in the Add License Form', async( () => {
    expect(compiled.querySelector('#expiry-date-input').nodeName).toBe('INPUT');
  }));
  it('should render an AGENCY field in the Add License Form', async( () => {
    expect(compiled.querySelector('#agency-input').nodeName).toBe('INPUT');
  }));
  it('should render an ADDRESS field in the Add License Form', async( () => {
    expect(compiled.querySelector('#address-input').nodeName).toBe('INPUT');
  }));
  it('should render a SUBMIT button', async( () => {
    expect(compiled.querySelector('button#submitted-license').textContent).toContain('Submit');
  }));
  it('should render a BACK button', async( () => {
    expect(compiled.querySelector('button#view-licenses').textContent).toContain('Back');
  }));
});
