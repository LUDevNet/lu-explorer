import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTaskComponent } from './item-task.component';

describe('ItemTaskComponent', () => {
  let component: ItemTaskComponent;
  let fixture: ComponentFixture<ItemTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
