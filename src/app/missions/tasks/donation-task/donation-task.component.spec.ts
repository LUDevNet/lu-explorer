import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTaskComponent } from './donation-task.component';

describe('DonationTaskComponent', () => {
  let component: DonationTaskComponent;
  let fixture: ComponentFixture<DonationTaskComponent>;

  beforeEach(async(() => {
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
