import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LicensesComponent} from './license.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('LicensesComponent', () => {

  let component: LicensesComponent;
  let fixture: ComponentFixture<LicensesComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should render a table to display license details', async( () => {
    expect(compiled.querySelector('#licenses-table').nodeName).toBe('TABLE');
  }));
  it('should render an ID field in the License Table Header', async( () => {
    expect(compiled.querySelector('#license-id').nodeName).toBe('TH');
  }));
  it('should render an ID REFERENCE field in the License Table Header', async( () => {
    expect(compiled.querySelector('#id-reference').nodeName).toBe('TH');
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
  it('should render a DATE OF ISSUE field in the License Table Header', async( () => {
    expect(compiled.querySelector('#date-of-issue').nodeName).toBe('TH');
  }));
  it('should render an EXPIRY DATE field in the License Table Header', async( () => {
    expect(compiled.querySelector('#expiry-date').nodeName).toBe('TH');
  }));
  it('should render an AGENCY field in the License Table Header', async( () => {
    expect(compiled.querySelector('#agency').nodeName).toBe('TH');
  }));
  it('should render a LICENSE NUMBER field in the License Table Header', async( () => {
    expect(compiled.querySelector('#license-number').nodeName).toBe('TH');
  }));
  it('should render an ADDRESS field in the License Table Header', async( () => {
    expect(compiled.querySelector('#address').nodeName).toBe('TH');
  }));
  it('should render LICENSE ID in Table Data', async(() => {
    expect(compiled.querySelector('#license-id-td').nodeName).toBe('TD');
  }));
  it('should render ID REFERENCE in Table Data', async(() => {
    expect(compiled.querySelector('#id-ref-td').nodeName).toBe('TD');
  }));
  it('should render SURNAME in Table Data', async(() => {
    expect(compiled.querySelector('#surname-td').nodeName).toBe('TD');
  }));
  it('should render FIRST NAMES in Table Data', async( () => {
    expect(compiled.querySelector('#first-names-td').nodeName).toBe('TD');
  }));
  it('should render DATE OF BIRTH in Table Data', async(() => {
    expect(compiled.querySelector('#date-of-birth-td').nodeName).toBe('TD');
  }));
  it('should render COUNTRY in Table Data', async(() => {
    expect(compiled.querySelector('#country-td').nodeName).toBe('TD');
  }));
  it('should render DATE OF ISSUE in Table Data', async(() => {
    expect(compiled.querySelector('#date-of-issue-td').nodeName).toBe('TD');
  }));
  it('should render EXPIRY DATE in Table Data', async(() => {
    expect(compiled.querySelector('#expiry-date-td').nodeName).toBe('TD');
  }));
  it('should render AGENCY in Table Data', async(() => {
    expect(compiled.querySelector('#agency-td').nodeName).toBe('TD');
  }));
  it('should render LICENSE NUMBER in Table Data', async(() => {
    expect(compiled.querySelector('#license-number-td').nodeName).toBe('TD');
  }));
  it('should render ADDRESS in Table Data', async(() => {
    expect(compiled.querySelector('#address-td').nodeName).toBe('TD');
  }));
  it('should render EDIT button', async( () => {
    expect(compiled.querySelector('#edit-license-button').nodeName).toBe('BUTTON');
  }));
});
