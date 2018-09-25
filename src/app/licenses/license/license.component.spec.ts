import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicensesComponent} from './license.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {LicenseService} from '../licenses.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LicensesComponent', () => {

  let component: LicensesComponent;
  let fixture: ComponentFixture<LicensesComponent>;
  let compiled;
  let licenseService;
  let licenseServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule, HttpClientTestingModule ]
    }).compileComponents();

    licenseService = TestBed.get(LicenseService);
    licenseServiceSpy = spyOn(licenseService, 'getLicenses').and.callThrough();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a table to display license details', async( () => {
    expect(compiled.querySelector('#licenses-table').nodeName).toBe('TABLE');
  }));
  it('should render an ID field in the License Table Header', async( () => {
    expect(compiled.querySelector('#license-id').nodeName).toBe('TH');
  }));
  it('should render a SURNAME field in the License Table Header', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toBe('TH');
  }));
  it('should render a FIRSTNAME field in the License Table Header', async( () => {
    expect(compiled.querySelector('#first-name').nodeName).toBe('TH');
  }));
  it('should render a DATE OF BIRTH field in the License Table Header', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('TH');
  }));
  it('should render a COUNTRY field in the License Table Header', async( () => {
    expect(compiled.querySelector('#country').nodeName).toBe('TH');
  }));
  // fit('should render LICENSE ID in Table Data', async(() => {
  //   // Need this to wait for all changes to be loaded and then assert.
  //   expect(compiled.querySelector('#license-id-td').nodeName).toBe('TD');
  // }));
  // it('should render SURNAME in Table Data', async(() => {
  //   compiled = fixture.detectChanges();
  //   compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#surname-td').nodeName).toBe('TD');
  // }));
  // it('should render FIRST NAMES in Table Data', async( () => {
  //   compiled = fixture.detectChanges();
  //   compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#first-names-td').nodeName).toBe('TD');
  // }));
  // it('should render DATE OF BIRTH in Table Data', async(() => {
  //   compiled = fixture.detectChanges();
  //   compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#date-of-birth-td').nodeName).toBe('TD');
  // }));
  // it('should render COUNTRY in Table Data', async(() => {
  //   compiled = fixture.detectChanges();
  //   compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#country-td').nodeName).toBe('TD');
  // }));
  // it('should render EDIT button', async( () => {
  //   compiled = fixture.detectChanges();
  //   compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#edit-license-button').nodeName).toBe('BUTTON');
  // }));
  it('should return the total number of Licenses', async( () => {
    expect(component.getLicenses()).toBeTruthy();
    expect(licenseServiceSpy).toHaveBeenCalledTimes(1);
  }));
});
