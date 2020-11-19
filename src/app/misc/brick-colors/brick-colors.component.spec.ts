import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrickColorsComponent } from './brick-colors.component';

describe('BrickColorsComponent', () => {
  let component: BrickColorsComponent;
  let fixture: ComponentFixture<BrickColorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
