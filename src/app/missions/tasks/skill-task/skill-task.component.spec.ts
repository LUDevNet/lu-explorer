import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilModule } from '../../../util/util.module';

import { SkillTaskComponent } from './skill-task.component';

describe('SkillTaskComponent', () => {
  let component: SkillTaskComponent;
  let fixture: ComponentFixture<SkillTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilModule, RouterTestingModule.withRoutes([])],
      declarations: [SkillTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 10,
      targetValue: 1,
      uid: 1000,
      taskParam1: "120",
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
