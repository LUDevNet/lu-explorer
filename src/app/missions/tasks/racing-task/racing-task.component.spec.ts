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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
