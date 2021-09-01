import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RacingTaskComponent } from './racing-task.component';

describe('RacingTaskComponent', () => {
  let component: RacingTaskComponent;
  let fixture: ComponentFixture<RacingTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RacingTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 23,
      targetValue: 1,
      uid: 1000,
      taskParam1: null,
      largeTaskIcon: null,
      IconID: null,
      largeTaskIconID: null,
      gate_version: "mock",
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
