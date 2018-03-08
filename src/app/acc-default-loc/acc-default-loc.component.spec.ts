import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDefaultLocComponent } from './acc-default-loc.component';

describe('AccDefaultLocComponent', () => {
  let component: AccDefaultLocComponent;
  let fixture: ComponentFixture<AccDefaultLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccDefaultLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDefaultLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
