import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmoteTaskComponent } from './emote-task.component';

describe('EmoteTaskComponent', () => {
  let component: EmoteTaskComponent;
  let fixture: ComponentFixture<EmoteTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoteTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 5,
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
