import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentDetailComponent } from './component-detail.component';

describe('ComponentDetailComponent', () => {
  let component: ComponentDetailComponent;
  let fixture: ComponentFixture<ComponentDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
