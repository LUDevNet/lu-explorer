import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTaskComponent } from './activity-task.component';

describe('ActivityTaskComponent', () => {
  let component: ActivityTaskComponent;
  let fixture: ComponentFixture<ActivityTaskComponent>;

  beforeEach(async(() => {
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
