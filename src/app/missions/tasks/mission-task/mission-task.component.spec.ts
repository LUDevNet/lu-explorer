import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTaskComponent } from './mission-task.component';

describe('MissionTaskComponent', () => {
  let component: MissionTaskComponent;
  let fixture: ComponentFixture<MissionTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
