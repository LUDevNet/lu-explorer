import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillTaskComponent } from './skill-task.component';

describe('SkillTaskComponent', () => {
  let component: SkillTaskComponent;
  let fixture: ComponentFixture<SkillTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
