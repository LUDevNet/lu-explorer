import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemValueComponent } from './item-value.component';

describe('ItemValueComponent', () => {
  let component: ItemValueComponent;
  let fixture: ComponentFixture<ItemValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
