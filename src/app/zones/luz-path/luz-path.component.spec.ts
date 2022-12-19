import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuzPathComponent } from './luz-path.component';

describe('LuzPathComponent', () => {
  let component: LuzPathComponent;
  let fixture: ComponentFixture<LuzPathComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
