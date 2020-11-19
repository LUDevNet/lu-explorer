import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScriptedActivityComponentComponent } from './scripted-activity-component.component';

describe('ScriptedActivityComponentComponent', () => {
  let component: ScriptedActivityComponentComponent;
  let fixture: ComponentFixture<ScriptedActivityComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptedActivityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptedActivityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
