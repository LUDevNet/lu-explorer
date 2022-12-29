import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListComponent } from './mission-list.component';

describe('MissionListComponent', () => {
  let component: MissionListComponent;
  let fixture: ComponentFixture<MissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
