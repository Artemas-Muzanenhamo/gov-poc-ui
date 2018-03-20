import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentityComponent } from './add-identity.component';

describe('AddIdentityComponent', () => {
  let component: AddIdentityComponent;
  let fixture: ComponentFixture<AddIdentityComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Add Identity form', async( () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#identity-form').nodeName).toContain('FORM');
  }));
});
