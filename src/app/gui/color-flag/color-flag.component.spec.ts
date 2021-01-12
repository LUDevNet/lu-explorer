import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFlagComponent } from './color-flag.component';

describe('ColorFlagComponent', () => {
  let component: ColorFlagComponent;
  let fixture: ComponentFixture<ColorFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
