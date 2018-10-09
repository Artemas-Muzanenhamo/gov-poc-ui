import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDetailComponent } from './identity-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

describe('IdentityDetailComponent', () => {
  let component: IdentityDetailComponent;
  let fixture: ComponentFixture<IdentityDetailComponent>;

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
    fixture = TestBed.createComponent(IdentityDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Back button with value Back', async() => {
    expect(component.backButton).toBe('Back');
  });
  it('should render Edit button with value Edit', async() => {
    expect(component.editButton).toBe('Edit');
  });
});
