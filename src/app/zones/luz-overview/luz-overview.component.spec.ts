import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuzOverviewComponent } from './luz-overview.component';

describe('LuzOverviewComponent', () => {
  let component: LuzOverviewComponent;
  let fixture: ComponentFixture<LuzOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
