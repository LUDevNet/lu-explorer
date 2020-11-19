import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectsByTypeComponent } from './by-type.component';

describe('ObjectsByTypeComponent', () => {
  let component: ObjectsByTypeComponent;
  let fixture: ComponentFixture<ObjectsByTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
