import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionTriggerComponentComponent } from './faction-trigger-component.component';

describe('FactionTriggerComponentComponent', () => {
  let component: FactionTriggerComponentComponent;
  let fixture: ComponentFixture<FactionTriggerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionTriggerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionTriggerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
