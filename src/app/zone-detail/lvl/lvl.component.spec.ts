import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvlComponent } from './lvl.component';

describe('LvlComponent', () => {
  let component: LvlComponent;
  let fixture: ComponentFixture<LvlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
