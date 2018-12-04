import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditLicenseComponent} from './edit-license.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {ActivatedRoute} from '@angular/router';
import {LicenseService} from '../licenses.service';

describe('EditLicenseComponent', () => {

  let component: EditLicenseComponent;
  let fixture: ComponentFixture<EditLicenseComponent>;
  let compiled;
  let editLicense;
  let activatedRoute: ActivatedRoute;
  let router;
  let liceseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          AppModule, RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {children: [{url: ['your/path/here']}]}}
        },
        LicenseService
      ]
    }).compileComponents();
  }));

  beforeEach(async() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    router = TestBed.get(RouterTestingModule);
    liceseService = TestBed.get(LicenseService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLicenseComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    editLicense = new EditLicenseComponent(activatedRoute, router, liceseService);
  });
  it('should render an Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-license-form').nodeName).toBe('FORM');
  }));
  it('should render an ID field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-license-id').nodeName).toBe('INPUT');
  }));
  it('should render an ID REFERENCE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-id-reference').nodeName).toBe('INPUT');
  }));
  it('should render a SURNAME field in the Edit License Form', () => {
    expect(compiled.querySelector('#edit-surname').nodeName).toBe('INPUT');
  });
  it('should render a FIRST NAME field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#edit-first-name').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF BIRTH field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('INPUT');
  }));
  it('should render a COUNTRY field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#country').nodeName).toBe('INPUT');
  }));
  it('should render a DATE OF ISSUE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#date-of-issue').nodeName).toBe('INPUT');
  }));
  it('should render an EXPIRY DATE field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#expiry-date').nodeName).toBe('INPUT');
  }));
  it('should render an AGENCY field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#agency').nodeName).toBe('INPUT');
  }));
  it('should render an ADDRESS field in the Edit License Form', async( () => {
    expect(compiled.querySelector('#address').nodeName).toBe('INPUT');
  }));
  it('should render a SUBMIT button', async( () => {
    expect(compiled.querySelector('#submit-edit-license').nodeName).toBe('BUTTON');
  }));
  it('should render a VIEW LICENSES button', async( () => {
    expect(compiled.querySelector('#view-licenses').nodeName).toBe('BUTTON');
  }));
  it('should return a pageTitle value of Edit License Details', async( () => {
    expect(editLicense.pageTitle).toBe('Edit License Details');
  }));
  it('should return a submitButton value of Submit', async( () => {
    expect(editLicense.submitButton).toBe('Submit');
  }));
  it('should return a backButton value of Back', async( () => {
    expect(editLicense.backButton).toBe('Back');
  }));
});
