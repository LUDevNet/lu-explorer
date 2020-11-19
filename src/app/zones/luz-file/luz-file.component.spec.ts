import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuzFileComponent } from './luz-file.component';

describe('LuzFileComponent', () => {
  let component: LuzFileComponent;
  let fixture: ComponentFixture<LuzFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
