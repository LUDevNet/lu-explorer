import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemSetIndexComponent } from './item-set-index.component';

describe('ItemSetIndexComponent', () => {
  let component: ItemSetIndexComponent;
  let fixture: ComponentFixture<ItemSetIndexComponent>;

  beforeEach(waitForAsync(() => {
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
