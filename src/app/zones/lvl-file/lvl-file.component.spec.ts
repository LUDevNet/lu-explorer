import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LvlFileComponent } from './lvl-file.component';

describe('LvlFileComponent', () => {
  let component: LvlFileComponent;
  let fixture: ComponentFixture<LvlFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LvlFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
