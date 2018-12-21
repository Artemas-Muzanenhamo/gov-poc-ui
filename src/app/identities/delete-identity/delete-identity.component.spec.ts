import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIdentityComponent } from './delete-identity.component';

describe('DeleteIdentityComponent', () => {
  let component: DeleteIdentityComponent;
  let fixture: ComponentFixture<DeleteIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
