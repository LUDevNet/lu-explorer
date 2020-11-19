import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiscComponent } from './misc.component';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
