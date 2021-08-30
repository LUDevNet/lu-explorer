import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiondisplayRewardComponent } from './missiondisplay-reward.component';

describe('MissiondisplayRewardComponent', () => {
  let component: MissiondisplayRewardComponent;
  let fixture: ComponentFixture<MissiondisplayRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissiondisplayRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissiondisplayRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
