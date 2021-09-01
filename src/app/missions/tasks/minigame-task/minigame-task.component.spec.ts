import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinigameTaskComponent } from './minigame-task.component';

describe('MinigameTaskComponent', () => {
  let component: MinigameTaskComponent;
  let fixture: ComponentFixture<MinigameTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinigameTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinigameTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 14,
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
