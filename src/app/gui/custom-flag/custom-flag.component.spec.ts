import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFlagComponent } from './custom-flag.component';

describe('CustomFlagComponent', () => {
  let component: CustomFlagComponent;
  let fixture: ComponentFixture<CustomFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
