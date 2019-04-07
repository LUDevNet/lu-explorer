import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptTaskComponent } from './script-task.component';

describe('ScriptTaskComponent', () => {
  let component: ScriptTaskComponent;
  let fixture: ComponentFixture<ScriptTaskComponent>;

  beforeEach(async(() => {
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
