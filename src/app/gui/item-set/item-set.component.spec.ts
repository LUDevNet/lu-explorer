import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetComponent } from './item-set.component';

describe('ItemSetComponent', () => {
  let component: ItemSetComponent;
  let fixture: ComponentFixture<ItemSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
