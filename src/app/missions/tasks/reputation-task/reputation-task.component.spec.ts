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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
