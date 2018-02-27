import {async, TestBed} from '@angular/core/testing';
import {LicenseComponent} from './license.component';

describe('LicenseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicenseComponent
      ],
    }).compileComponents();
  }));
  it('should render an Add License button', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#add-license-details').textContent).toContain('Add License');
  }));
  it('should render an Edit License button', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#edit-license-details').textContent).toContain('Edit License');
  }));
  it('should render a Delete License button', async( () => {
    const fixture = TestBed.createComponent(LicenseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#delete-license-details').textContent).toContain('Delete License');
  }));
});
