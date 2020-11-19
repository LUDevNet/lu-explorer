import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NpcIconComponent } from './npc-icon.component';

describe('NpcIconComponent', () => {
  let component: NpcIconComponent;
  let fixture: ComponentFixture<NpcIconComponent>;

  beforeEach(waitForAsync(() => {
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
