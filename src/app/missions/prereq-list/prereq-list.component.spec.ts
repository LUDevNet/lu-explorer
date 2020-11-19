import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrereqListComponent } from './prereq-list.component';

describe('PrereqListComponent', () => {
  let component: PrereqListComponent;
  let fixture: ComponentFixture<PrereqListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrereqListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrereqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
