import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: GateDetailComponent;
  let fixture: ComponentFixture<GateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
