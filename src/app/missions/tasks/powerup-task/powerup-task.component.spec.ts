import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PowerupTaskComponent } from './powerup-task.component';

describe('PowerupTaskComponent', () => {
  let component: PowerupTaskComponent;
  let fixture: ComponentFixture<PowerupTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerupTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerupTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
