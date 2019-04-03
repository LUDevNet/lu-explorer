import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrereqListComponent } from './prereq-list.component';

describe('PrereqListComponent', () => {
  let component: PrereqListComponent;
  let fixture: ComponentFixture<PrereqListComponent>;

  beforeEach(async(() => {
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
