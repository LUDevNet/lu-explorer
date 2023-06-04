import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootMatrixUsedByComponent } from './loot-matrix-used-by.component';

describe('LootMatrixUsedByComponent', () => {
  let component: LootMatrixUsedByComponent;
  let fixture: ComponentFixture<LootMatrixUsedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LootMatrixUsedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LootMatrixUsedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
