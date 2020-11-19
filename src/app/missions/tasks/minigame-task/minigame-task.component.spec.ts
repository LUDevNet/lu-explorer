import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinigameTaskComponent } from './minigame-task.component';

describe('MinigameTaskComponent', () => {
  let component: MinigameTaskComponent;
  let fixture: ComponentFixture<MinigameTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinigameTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinigameTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
