import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { FeatureGatingComponent } from './feature-gating.component';

describe('FeatureGatingComponent', () => {
  let component: FeatureGatingComponent;
  let fixture: ComponentFixture<FeatureGatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
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
