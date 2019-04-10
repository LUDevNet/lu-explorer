import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetIndexComponent } from './item-set-index.component';

describe('ItemSetIndexComponent', () => {
  let component: ItemSetIndexComponent;
  let fixture: ComponentFixture<ItemSetIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSetIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
