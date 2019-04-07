import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTaskComponent } from './property-task.component';

describe('PropertyTaskComponent', () => {
  let component: PropertyTaskComponent;
  let fixture: ComponentFixture<PropertyTaskComponent>;

  beforeEach(async(() => {
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
