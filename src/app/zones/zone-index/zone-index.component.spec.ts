import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZoneIndexComponent } from './zone-index.component';

describe('ZoneIndexComponent', () => {
  let component: ZoneIndexComponent;
  let fixture: ComponentFixture<ZoneIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
