import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAltComponent } from './detail-alt.component';

describe('DetailAltComponent', () => {
  let component: DetailAltComponent;
  let fixture: ComponentFixture<DetailAltComponent>;

  beforeEach(async(() => {
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
