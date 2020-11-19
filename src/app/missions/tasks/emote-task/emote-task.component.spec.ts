import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmoteTaskComponent } from './emote-task.component';

describe('EmoteTaskComponent', () => {
  let component: EmoteTaskComponent;
  let fixture: ComponentFixture<EmoteTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
