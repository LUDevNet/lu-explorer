import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InventoryComponentComponent } from './inventory-component.component';

describe('InventoryComponentComponent', () => {
  let component: InventoryComponentComponent;
  let fixture: ComponentFixture<InventoryComponentComponent>;

  beforeEach(waitForAsync(() => {
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
