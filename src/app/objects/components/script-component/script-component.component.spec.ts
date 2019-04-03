import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptComponentComponent } from './script-component.component';

describe('ScriptComponentComponent', () => {
  let component: ScriptComponentComponent;
  let fixture: ComponentFixture<ScriptComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
