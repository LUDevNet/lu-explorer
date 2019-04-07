import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEntranceComponentComponent } from './property-entrance-component.component';

describe('PropertyEntranceComponentComponent', () => {
  let component: PropertyEntranceComponentComponent;
  let fixture: ComponentFixture<PropertyEntranceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyEntranceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyEntranceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
