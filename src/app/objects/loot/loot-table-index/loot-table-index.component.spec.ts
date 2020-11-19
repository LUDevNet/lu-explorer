import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootTableIndexComponent } from './loot-table-index.component';

describe('LootTableIndexComponent', () => {
  let component: LootTableIndexComponent;
  let fixture: ComponentFixture<LootTableIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootTableIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootTableIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
