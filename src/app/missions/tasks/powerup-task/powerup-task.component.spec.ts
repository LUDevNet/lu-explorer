import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupTaskComponent } from './powerup-task.component';

describe('PowerupTaskComponent', () => {
  let component: PowerupTaskComponent;
  let fixture: ComponentFixture<PowerupTaskComponent>;

  beforeEach(async(() => {
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
