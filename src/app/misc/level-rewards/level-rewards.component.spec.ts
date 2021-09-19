import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelRewardsComponent } from './level-rewards.component';

describe('LevelRewardsComponent', () => {
  let component: LevelRewardsComponent;
  let fixture: ComponentFixture<LevelRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
