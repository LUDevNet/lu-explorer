import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCodesComponent } from './reward-codes.component';

describe('RewardCodesComponent', () => {
  let component: RewardCodesComponent;
  let fixture: ComponentFixture<RewardCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
