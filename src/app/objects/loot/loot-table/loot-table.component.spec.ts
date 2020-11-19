import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootTableComponent } from './loot-table.component';

describe('LootTableComponent', () => {
  let component: LootTableComponent;
  let fixture: ComponentFixture<LootTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
