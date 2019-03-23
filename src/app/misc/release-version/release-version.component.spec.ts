import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseVersionComponent } from './release-version.component';

describe('ReleaseVersionComponent', () => {
  let component: ReleaseVersionComponent;
  let fixture: ComponentFixture<ReleaseVersionComponent>;

  beforeEach(async(() => {
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
