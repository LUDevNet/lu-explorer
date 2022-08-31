import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedByComponent } from './used-by.component';

describe('UsedByComponent', () => {
  let component: UsedByComponent;
  let fixture: ComponentFixture<UsedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
