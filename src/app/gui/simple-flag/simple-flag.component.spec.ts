import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFlagComponent } from './simple-flag.component';

describe('SimpleFlagComponent', () => {
  let component: SimpleFlagComponent;
  let fixture: ComponentFixture<SimpleFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
