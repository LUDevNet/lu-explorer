import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsumableTaskComponent } from './consumable-task.component';

describe('ConsumableTaskComponent', () => {
  let component: ConsumableTaskComponent;
  let fixture: ComponentFixture<ConsumableTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
