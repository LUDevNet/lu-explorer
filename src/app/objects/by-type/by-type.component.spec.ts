import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsByTypeComponent } from './by-type.component';

describe('ObjectsByTypeComponent', () => {
  let component: ObjectsByTypeComponent;
  let fixture: ComponentFixture<ObjectsByTypeComponent>;

  beforeEach(async(() => {
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
