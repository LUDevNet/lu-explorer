import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcIconComponent } from './npc-icon.component';

describe('NpcIconComponent', () => {
  let component: NpcIconComponent;
  let fixture: ComponentFixture<NpcIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
