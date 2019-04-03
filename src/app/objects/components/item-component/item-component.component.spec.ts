import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponentComponent } from './item-component.component';

describe('ItemComponentComponent', () => {
  let component: ItemComponentComponent;
  let fixture: ComponentFixture<ItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
