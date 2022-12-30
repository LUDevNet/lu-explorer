import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetListComponent } from './item-set-list.component';

describe('ItemSetListComponent', () => {
  let component: ItemSetListComponent;
  let fixture: ComponentFixture<ItemSetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
