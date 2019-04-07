import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorDetailComponent } from './behavior-detail.component';

describe('BehaviorDetailComponent', () => {
  let component: BehaviorDetailComponent;
  let fixture: ComponentFixture<BehaviorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
