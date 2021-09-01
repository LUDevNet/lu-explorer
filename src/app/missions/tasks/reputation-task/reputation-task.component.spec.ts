import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReputationTaskComponent } from './reputation-task.component';

describe('ReputationTaskComponent', () => {
  let component: ReputationTaskComponent;
  let fixture: ComponentFixture<ReputationTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 17,
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
