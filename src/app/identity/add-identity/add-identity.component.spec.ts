import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentityComponent } from './add-identity.component';

describe('AddIdentityComponent', () => {
  let component: AddIdentityComponent;
  let fixture: ComponentFixture<AddIdentityComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Add Identity form', async( () => {
    expect(compiled.querySelector('#identity-form').nodeName).toContain('FORM');
  }));
  it('should render ID Number as input', async( () => {
    expect(compiled.querySelector('#identity-number').nodeName).toContain('INPUT');
  }));
  it('should render ID Reference as input', async( () => {
    expect(compiled.querySelector('#identity-ref').nodeName).toContain('INPUT');
  }));
  it('should render First Names as input', async( () => {
    expect(compiled.querySelector('#first-names').nodeName).toContain('INPUT');
  }));
  it('should render Surname as input', async( () => {
    expect(compiled.querySelector('#surname').nodeName).toContain('INPUT');
  }));
  it('should render Date of Birth as input', async( () => {
    expect(compiled.querySelector('#date-of-birth').nodeName).toContain('INPUT');
  }));
  it('should render Village of Origin as input', async( () => {
    expect(compiled.querySelector('#village-of-origin').nodeName).toContain('INPUT');
  }));
  it('should render Place of Birth as input', async( () => {
    expect(compiled.querySelector('#place-of-birth').nodeName).toContain('INPUT');
  }));
  it('should render Date of Issue as input', async( () => {
    expect(compiled.querySelector('#date-of-issue').nodeName).toContain('INPUT');
  }));
});
