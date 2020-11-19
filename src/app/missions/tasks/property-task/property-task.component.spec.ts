import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertyTaskComponent } from './property-task.component';

describe('PropertyTaskComponent', () => {
  let component: PropertyTaskComponent;
  let fixture: ComponentFixture<PropertyTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
