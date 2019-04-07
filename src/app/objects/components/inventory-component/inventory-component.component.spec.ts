import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponentComponent } from './inventory-component.component';

describe('InventoryComponentComponent', () => {
  let component: InventoryComponentComponent;
  let fixture: ComponentFixture<InventoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
