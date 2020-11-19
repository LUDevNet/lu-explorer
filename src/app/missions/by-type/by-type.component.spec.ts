import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MissionsByTypeComponent } from './by-type.component';

describe('MissionsByTypeComponent', () => {
  let component: MissionsByTypeComponent;
  let fixture: ComponentFixture<MissionsByTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
