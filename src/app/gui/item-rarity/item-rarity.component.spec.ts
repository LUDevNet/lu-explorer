import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRarityComponent } from './item-rarity.component';

describe('ItemRarityComponent', () => {
  let component: ItemRarityComponent;
  let fixture: ComponentFixture<ItemRarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRarityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
