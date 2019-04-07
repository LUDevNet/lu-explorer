import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingTaskComponent } from './racing-task.component';

describe('RacingTaskComponent', () => {
  let component: RacingTaskComponent;
  let fixture: ComponentFixture<RacingTaskComponent>;

  beforeEach(async(() => {
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
