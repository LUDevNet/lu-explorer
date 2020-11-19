import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DonationTaskComponent } from './donation-task.component';

describe('DonationTaskComponent', () => {
  let component: DonationTaskComponent;
  let fixture: ComponentFixture<DonationTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
