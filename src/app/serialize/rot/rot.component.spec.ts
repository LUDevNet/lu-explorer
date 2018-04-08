import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotComponent } from './rot.component';

describe('RotComponent', () => {
  let component: RotComponent;
  let fixture: ComponentFixture<RotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
