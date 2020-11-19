import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivityTaskComponent } from './activity-task.component';

describe('ActivityTaskComponent', () => {
  let component: ActivityTaskComponent;
  let fixture: ComponentFixture<ActivityTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
