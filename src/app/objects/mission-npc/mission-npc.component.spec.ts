import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionNpcComponent } from './mission-npc.component';

describe('MissionNpcComponent', () => {
  let component: MissionNpcComponent;
  let fixture: ComponentFixture<MissionNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
