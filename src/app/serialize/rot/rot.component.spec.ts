import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RotComponent } from './rot.component';

describe('RotComponent', () => {
  let component: RotComponent;
  let fixture: ComponentFixture<RotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotComponent);
    component = fixture.componentInstance;
    component.rot = {x: 0, y: 0, z: 0, w: 1};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
