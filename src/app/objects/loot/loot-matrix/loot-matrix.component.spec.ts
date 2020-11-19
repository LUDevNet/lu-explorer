import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootMatrixComponent } from './loot-matrix.component';

describe('LootMatrixComponent', () => {
  let component: LootMatrixComponent;
  let fixture: ComponentFixture<LootMatrixComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
