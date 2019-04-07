import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionsComponent } from './factions.component';

describe('FactionsComponent', () => {
  let component: FactionsComponent;
  let fixture: ComponentFixture<FactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
