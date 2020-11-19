import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmashTaskComponent } from './smash-task.component';

describe('SmashTaskComponent', () => {
  let component: SmashTaskComponent;
  let fixture: ComponentFixture<SmashTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
