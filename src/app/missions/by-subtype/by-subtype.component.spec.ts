import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsBySubtypeComponent } from './by-subtype.component';

describe('MissionsBySubtypeComponent', () => {
  let component: MissionsBySubtypeComponent;
  let fixture: ComponentFixture<MissionsBySubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsBySubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsBySubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
