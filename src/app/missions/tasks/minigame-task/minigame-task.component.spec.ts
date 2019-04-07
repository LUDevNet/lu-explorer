import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigameTaskComponent } from './minigame-task.component';

describe('MinigameTaskComponent', () => {
  let component: MinigameTaskComponent;
  let fixture: ComponentFixture<MinigameTaskComponent>;

  beforeEach(async(() => {
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
