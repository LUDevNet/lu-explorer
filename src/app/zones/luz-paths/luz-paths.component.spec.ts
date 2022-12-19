import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuzPathsComponent } from './luz-paths.component';

describe('LuzPathsComponent', () => {
  let component: LuzPathsComponent;
  let fixture: ComponentFixture<LuzPathsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
