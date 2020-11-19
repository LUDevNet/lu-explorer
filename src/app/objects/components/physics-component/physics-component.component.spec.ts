import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhysicsComponentComponent } from './physics-component.component';

describe('PhysicsComponentComponent', () => {
  let component: PhysicsComponentComponent;
  let fixture: ComponentFixture<PhysicsComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
