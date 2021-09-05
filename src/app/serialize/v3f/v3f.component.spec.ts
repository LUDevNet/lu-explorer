import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { V3fComponent } from './v3f.component';

describe('V3fComponent', () => {
  let component: V3fComponent;
  let fixture: ComponentFixture<V3fComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ V3fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V3fComponent);
    component = fixture.componentInstance;
    component.v3f = {x: 100, y: 100, z: 100};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
