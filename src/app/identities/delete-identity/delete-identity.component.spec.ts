import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIdentityComponent } from './delete-identity.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

describe('DeleteIdentityComponent', () => {
  let component: DeleteIdentityComponent;
  let fixture: ComponentFixture<DeleteIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ]
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
