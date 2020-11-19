import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscriptionPricingComponent } from './subscription-pricing.component';

describe('SubscriptionPricingComponent', () => {
  let component: SubscriptionPricingComponent;
  let fixture: ComponentFixture<SubscriptionPricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
