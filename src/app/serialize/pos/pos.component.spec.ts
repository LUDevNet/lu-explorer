import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RotComponent } from '../rot/rot.component';
import { V3fComponent } from '../v3f/v3f.component';

import { PosComponent } from './pos.component';

describe('PosComponent', () => {
  let component: PosComponent;
  let fixture: ComponentFixture<PosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PosComponent, RotComponent, V3fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosComponent);
    component = fixture.componentInstance;
    component.pos = {
      pos: {x: 1.0, y: 0.0, z: 0.0 },
      rot: {x: 1.0, y: 0.0, z: 0.0, w: 0.0 },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
