import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectTypesIndexComponent } from './types-index.component';

describe('ObjectTypesIndexComponent', () => {
  let component: ObjectTypesIndexComponent;
  let fixture: ComponentFixture<ObjectTypesIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectTypesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTypesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
