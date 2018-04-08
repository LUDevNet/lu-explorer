import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGatingComponent } from './event-gating.component';

describe('EventGatingComponent', () => {
  let component: EventGatingComponent;
  let fixture: ComponentFixture<EventGatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventGatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
