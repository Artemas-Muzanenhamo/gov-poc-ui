import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdentityComponent } from './edit-identity.component';

describe('EditIdentityComponent', () => {
  let component: EditIdentityComponent;
  let fixture: ComponentFixture<EditIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
