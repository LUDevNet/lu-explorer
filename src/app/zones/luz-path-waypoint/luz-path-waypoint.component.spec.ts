import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuzPathWaypointComponent } from './luz-path-waypoint.component';

describe('LuzPathWaypointComponent', () => {
  let component: LuzPathWaypointComponent;
  let fixture: ComponentFixture<LuzPathWaypointComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzPathWaypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzPathWaypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
