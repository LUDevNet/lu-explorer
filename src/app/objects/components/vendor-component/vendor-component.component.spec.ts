import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorComponentComponent } from './vendor.component';

describe('VendorComponentComponent', () => {
  let component: VendorComponentComponent;
  let fixture: ComponentFixture<VendorComponentComponent>;

  beforeEach(async(() => {
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
