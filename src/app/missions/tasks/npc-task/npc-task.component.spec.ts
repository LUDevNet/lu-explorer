import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcTaskComponent } from './npc-task.component';

describe('NpcTaskComponent', () => {
  let component: NpcTaskComponent;
  let fixture: ComponentFixture<NpcTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
