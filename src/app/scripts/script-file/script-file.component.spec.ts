import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptFileComponent } from './script-file.component';

describe('ScriptFileComponent', () => {
  let component: ScriptFileComponent;
  let fixture: ComponentFixture<ScriptFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
