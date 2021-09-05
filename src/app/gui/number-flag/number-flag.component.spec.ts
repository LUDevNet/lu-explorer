import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFlagComponent } from './number-flag.component';

describe('NumberFlagComponent', () => {
  let component: NumberFlagComponent;
  let fixture: ComponentFixture<NumberFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberFlagComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
