import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootMatrixIndexComponent } from './loot-matrix-index.component';

describe('LootMatrixComponent', () => {
  let component: LootMatrixIndexComponent;
  let fixture: ComponentFixture<LootMatrixIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootMatrixIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootMatrixIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
