import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetTaskComponent } from './pet-task.component';

describe('PetTaskComponent', () => {
  let component: PetTaskComponent;
  let fixture: ComponentFixture<PetTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 22,
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
