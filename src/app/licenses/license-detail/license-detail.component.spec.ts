import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDetailComponent } from './license-detail.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('LicenseDetailComponent', () => {
  let component: LicenseDetailComponent;
  let fixture: ComponentFixture<LicenseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
