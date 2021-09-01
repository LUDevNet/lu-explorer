import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DB_MissionTasks } from '../../../cdclient';

import { ConsumableTaskComponent } from './consumable-task.component';

describe('ConsumableTaskComponent', () => {
  let component: ConsumableTaskComponent;
  let fixture: ComponentFixture<ConsumableTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 9,
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
