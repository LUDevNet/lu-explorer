import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BehaviorComponent } from './behavior.component';

describe('BehaviorComponent', () => {
  let component: BehaviorComponent;
  let fixture: ComponentFixture<BehaviorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
