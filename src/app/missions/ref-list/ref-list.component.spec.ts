import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MissionRefListComponent } from './ref-list.component';

describe('MissionRefListComponent', () => {
  let component: MissionRefListComponent;
  let fixture: ComponentFixture<MissionRefListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionRefListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRefListComponent);
    component = fixture.componentInstance;
    component.ref = {type: 'lit', value: 1000};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
