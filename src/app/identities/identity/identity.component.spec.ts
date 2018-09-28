import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IdentitiesComponent} from './identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

fdescribe('IdentitiesComponent', () => {

  let component: IdentitiesComponent;
  let fixture: ComponentFixture<IdentitiesComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
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
  it('should render IDENTITY in the table header', async( () => {
    expect(compiled.querySelector('#identity-id').nodeName).toBe('TH');
  }));
  it('should render IDENTITY REF in the table header', async( () => {
    expect(compiled.querySelector('#identity-ref').nodeName).toBe('TH');
  }));
  it('should render NAME in the table header', async( () => {
    expect(compiled.querySelector('#first-name').nodeName).toBe('TH');
  }));
  it('should render SURNAME in the table header', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toBe('TH');
  }));
  it('should render DATE OF BIRTH in the table header', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toBe('TH');
  }));
  it('should render IDENTITY in the table data', async( () => {
    expect(compiled.querySelector('#identity-id-td').nodeName).toBe('TD');
  }));
  it('should render IDENTITY REF in the table data', async( () => {
    expect(compiled.querySelector('#identity-ref-td').nodeName).toBe('TD');
  }));
  it('should render NAME in the table data', async( () => {
    expect(compiled.querySelector('#first-name-td').nodeName).toBe('TD');
  }));
  it('should render SURNAME in the table data', async( () => {
    expect(compiled.querySelector('#surname-td').nodeName).toBe('TD');
  }));
  it('should render DATE OF BIRTH in the table data', async( () => {
    expect(compiled.querySelector('#date-of-birth-td').nodeName).toBe('TD');
  }));
  it('should render EDIT button', async( () => {
    expect(compiled.querySelector('#edit-identity-button').nodeName).toBe('BUTTON');
  }));
});
