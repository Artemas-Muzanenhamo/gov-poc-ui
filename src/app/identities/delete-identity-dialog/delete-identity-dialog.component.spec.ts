import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIdentityDialogComponent } from './delete-identity-dialog.component';

describe('DeleteIdentityDialogComponent', () => {
  let component: DeleteIdentityDialogComponent;
  let fixture: ComponentFixture<DeleteIdentityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIdentityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIdentityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
