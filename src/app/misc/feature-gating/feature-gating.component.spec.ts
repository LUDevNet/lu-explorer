import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureGatingComponent } from './feature-gating.component';

describe('FeatureGatingComponent', () => {
  let component: FeatureGatingComponent;
  let fixture: ComponentFixture<FeatureGatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureGatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
