import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootMatrixComponent } from './loot-matrix.component';

describe('LootMatrixComponent', () => {
  let component: LootMatrixComponent;
  let fixture: ComponentFixture<LootMatrixComponent>;

  beforeEach(async(() => {
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
