import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScriptTaskComponent } from './script-task.component';

describe('ScriptTaskComponent', () => {
  let component: ScriptTaskComponent;
  let fixture: ComponentFixture<ScriptTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
