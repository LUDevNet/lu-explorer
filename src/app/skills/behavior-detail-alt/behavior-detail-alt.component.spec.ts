import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailAltComponent } from './detail-alt.component';

describe('DetailAltComponent', () => {
  let component: DetailAltComponent;
  let fixture: ComponentFixture<DetailAltComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
