import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemSetDetailComponent } from './item-set-detail.component';

describe('ItemSetDetailComponent', () => {
  let component: ItemSetDetailComponent;
  let fixture: ComponentFixture<ItemSetDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
