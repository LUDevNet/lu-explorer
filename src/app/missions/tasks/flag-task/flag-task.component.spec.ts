import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlagTaskComponent } from './flag-task.component';

describe('FlagTaskComponent', () => {
  let component: FlagTaskComponent;
  let fixture: ComponentFixture<FlagTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
