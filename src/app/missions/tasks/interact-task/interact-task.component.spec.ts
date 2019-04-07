import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractTaskComponent } from './interact-task.component';

describe('InteractTaskComponent', () => {
  let component: InteractTaskComponent;
  let fixture: ComponentFixture<InteractTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
