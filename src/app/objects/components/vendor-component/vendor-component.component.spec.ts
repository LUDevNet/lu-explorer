import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VendorComponentComponent } from './vendor.component';

describe('VendorComponentComponent', () => {
  let component: VendorComponentComponent;
  let fixture: ComponentFixture<VendorComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
