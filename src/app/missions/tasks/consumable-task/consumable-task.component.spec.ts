import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableTaskComponent } from './consumable-task.component';

describe('ConsumableTaskComponent', () => {
  let component: ConsumableTaskComponent;
  let fixture: ComponentFixture<ConsumableTaskComponent>;

  beforeEach(async(() => {
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
