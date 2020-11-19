import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectTaskComponent } from './collect-task.component';

describe('CollectTaskComponent', () => {
  let component: CollectTaskComponent;
  let fixture: ComponentFixture<CollectTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
