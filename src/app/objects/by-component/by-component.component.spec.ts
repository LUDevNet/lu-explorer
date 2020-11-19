import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectsByComponentComponent } from './by-component.component';

describe('ObjectsByComponentComponent', () => {
  let component: ObjectsByComponentComponent;
  let fixture: ComponentFixture<ObjectsByComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectsByComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
