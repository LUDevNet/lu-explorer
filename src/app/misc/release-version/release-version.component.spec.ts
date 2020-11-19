import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReleaseVersionComponent } from './release-version.component';

describe('ReleaseVersionComponent', () => {
  let component: ReleaseVersionComponent;
  let fixture: ComponentFixture<ReleaseVersionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
