import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FactionsGraphComponent } from './factions.component';

describe('FactionsComponent', () => {
  let component: FactionsGraphComponent;
  let fixture: ComponentFixture<FactionsGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
